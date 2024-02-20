from helpers.cli import execute_command


def install_hook(project):
    """
    Command to run to complete the project scaffolding setup.

    :param project: the project object
    """
    execute_command(project, "pnpm install")


VANILLA_JS = {
    "path": "gigya-with-vanilajs-html",
    "description": "This example project implements SAP/Gigya Authorisation using vanilla JavaScript.",
    "summary": "\n".join([
        "* initial html can be served by any web server, e.g. python -m http.server 8000",
        "* gigya-based authentication using gigya screen set in a simple html file",
        "* apikey used in html file as YOUR_API_KEY should be replaced with actual gigya api key from GIGYA_API_KEY env or apikey args",
    ]),
    "install_hook": install_hook,
}
