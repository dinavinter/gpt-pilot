from helpers.cli import execute_command


def install_hook(project):
    """
    Command to run to complete the project scaffolding setup.

    :param project: the project object
    """
    execute_command(project, "deno run --allow-net --allow-read --allow-env main.tsx")


DENO_NOTIFY_LOGIN_TS = {
    "path": "gigya-with-deno",
    "description": "Deno web app with gigya-based authentication",
    "summary": "\n".join([
        "* initial Deno setup",
        "* gigya-based authentication using gigya notifyLogin API",
        "* Oak framework for HTTP server",
        "* config loading from environment using Deno.env",
    ]),
    "install_hook": install_hook,
}
