from setuptools import setup

setup(
    install_requires=["requests"],
    entry_points={
        "console_scripts": [
            "todo = todo.todo:main"
        ]
    }
)