from helpers.cli import execute_command


def install_hook(project):
    """
    Command to run to complete the project scaffolding setup.

    :param project: the project object
    """
    execute_command(project, "pnpm install")


VITE_TS = {
    "path": "gigya-with-vite",
    "description": "Vite + TS web app with gigya-based authentication",
    "summary": "\n".join([
        "* initial Vite + TS setup",
        "* gigya-based authentication using gigya screen set at src/gigya/service.ts, using xstate and gigya",
        "* Vite view engine, with profile and jwt views",
        "* Uses pnpm for dependency management",
        "* Config loading from environment using dotenv with a placeholder .env.example file: you will need to create a.env file with your own values",
    ]),
    "install_hook": install_hook,
}
