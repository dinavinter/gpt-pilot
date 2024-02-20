from helpers.cli import execute_command


def install_hook(project):
    """
    Command to run to complete the project scaffolding setup.

    :param project: the project object
    """
    execute_command(project, "yarn && yarn start")


TYPESCRIPT_REACT = {
    "path": "typescript-react-example",
    "description": "React web app with gigya-based authentication",
    "summary": "\n".join([
        "* initial React + TypeScript setup",
        "* gigya-based authentication at src/AuthContext",
        "* Uses yarn for dependency management",
        "* Api key used in src/index.html as YOUR_API_KEY should be replaced with actual gigya api key from GIGYA_API_KEY env or apikey args",
    ]),
    "install_hook": install_hook,
}
