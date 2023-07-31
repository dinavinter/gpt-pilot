# utils/utils.py

import sys
import os
import platform
import distro
import uuid
import re
from jinja2 import Environment, FileSystemLoader

from const.llm import MAX_QUESTIONS, END_RESPONSE
from const.common import ROLES, STEPS


def get_arguments():
    # The first element in sys.argv is the name of the script itself.
    # Any additional elements are the arguments passed from the command line.
    args = sys.argv[1:]

    # Create an empty dictionary to store the key-value pairs.
    arguments = {}

    # Loop through the arguments and parse them as key-value pairs.
    for arg in args:
        if '=' in arg:
            key, value = arg.split('=', 1)
            arguments[key] = value
        else:
            # Handle arguments without '=' (e.g., positional arguments).
            pass

    if 'user_id' not in arguments:
        arguments['user_id'] = str(uuid.uuid4())

    if 'app_id' not in arguments:
        arguments['app_id'] = str(uuid.uuid4())

    if 'step' not in arguments:
        arguments['step'] = None

    print(f"If you wish to continue with this project in future run 'python main.py app_id={arguments['app_id']}'")
    return arguments


def capitalize_first_word_with_underscores(s):
    # Split the string into words based on underscores.
    words = s.split('_')

    # Capitalize the first word and leave the rest unchanged.
    words[0] = words[0].capitalize()

    # Join the words back into a string with underscores.
    capitalized_string = '_'.join(words)

    return capitalized_string


def get_prompt_components():
    # This function reads and renders all prompts inside /prompts/components and returns them in dictionary

    # Create an empty dictionary to store the file contents.
    prompts_components = {}
    data = {
        'MAX_QUESTIONS': MAX_QUESTIONS,
        'END_RESPONSE': END_RESPONSE
    }

    # Create a FileSystemLoader
    file_loader = FileSystemLoader('prompts/components')

    # Create the Jinja2 environment
    env = Environment(loader=file_loader)

    # Get the list of template names
    template_names = env.list_templates()

    # For each template, load and store its content
    for template_name in template_names:
        # Get the filename without extension as the dictionary key.
        file_key = os.path.splitext(template_name)[0]

        # Load the template and render it with no variables
        file_content = env.get_template(template_name).render(data)

        # Store the file content in the dictionary
        prompts_components[file_key] = file_content

    return prompts_components


def get_sys_message(role):
    # Create a FileSystemLoader
    file_loader = FileSystemLoader('prompts/system_messages')

    # Create the Jinja2 environment
    env = Environment(loader=file_loader)

    # Load the template
    template = env.get_template(f'{role}.prompt')

    # Render the template with no variables
    content = template.render()

    return {
        "role": "system",
        "content": content
    }


def find_role_from_step(target):
    for role, values in ROLES.items():
        if target in values:
            return role

    return 'product_owner'


def get_os_info():
    os_info = {
        "OS": platform.system(),
        "OS Version": platform.version(),
        "Architecture": platform.architecture()[0],
        "Machine": platform.machine(),
        "Node": platform.node(),
        "Release": platform.release(),
    }

    if os_info["OS"] == "Linux":
        os_info["Distribution"] = ' '.join(distro.linux_distribution(full_distribution_name=True))
    elif os_info["OS"] == "Windows":
        os_info["Win32 Version"] = ' '.join(platform.win32_ver())
    elif os_info["OS"] == "Mac":
        os_info["Mac Version"] = platform.mac_ver()[0]

    # Convert the dictionary to a readable text format
    output = "\n".join(f"{key}: {value}" for key, value in os_info.items())
    return output


def execute_step(matching_step, current_step):
    matching_step_index = STEPS.index(matching_step) if matching_step in STEPS else None
    current_step_index = STEPS.index(current_step) if current_step in STEPS else None

    return matching_step_index is not None and current_step_index is not None and current_step_index >= matching_step_index


def split_into_bullets(text):
    pattern = re.compile(r'\n*\d+\.\s\*\*')
    split_text = re.split(pattern, text)
    split_text = [bullet for bullet in split_text if bullet]  # Remove any empty strings from the list
    return split_text


def generate_app_data(args):
    return {'app_id': args['app_id'], 'app_type': args['app_type']}