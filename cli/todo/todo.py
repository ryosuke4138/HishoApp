import sys

API_BASE_URL = 'http://127.0.0.1:8000'

class Command():
    def __init__(self, args):
        self.args = args

    def create(self):
        title, description = self.args
        txt = 'create(title="{}", description="{}")'.format(title, description)
        print(txt)

    def show(self):
        txt = 'show'
        print(txt)

    def edit(self):
        id, status = self.args
        txt = 'edit(id="{}", status="{}")'.format(id, status)
        print(txt)

    def delete(self):
        id = self.args
        txt = 'delete(id="{}")'.format(id)
        print(txt)

class Parse():
    def __init__(self, args):
        self.args = args
        self.error_msg = ''

    def add_error_message(self, attr):
        self.error_msg += attr

    def raise_error(self):
        if self.error_msg != '':
            raise Exception("{} required.".format(self.error_msg))

    def get_arg(self, attr, short_attr=''):
        for i, arg in enumerate(self.args):
            if (arg == attr or arg == short_attr) and len(self.args) > i:
                return self.args[i+1]
        self.add_error_message(attr)
    
    def check_status(self, status):
        status_list = ['unstarted', 'inprogress', 'completed']
        if status not in status_list:
            raise Exception("status not found in the list {}".format(status_list))

    def create(self):
        title = self.get_arg('--title', '-t')
        description = self.get_arg('--description', '-d')
        self.raise_error()
        return title, description

    def show(self):
        pass

    def edit(self):
        id = self.get_arg('--id')
        status = self.get_arg('--status', '-s')
        self.check_status(status)
        self.raise_error()
        return id, status

    def delete(self):
        id = self.get_arg('--id')
        self.raise_error()
        return id

def parse_args(command, args):
    """return arguments which suits the command"""
    args = getattr(Parse(args), command)
    return args()

def main():
    # read command
    command_list = ['create', 'show', 'edit', 'delete']
    command = sys.argv[1]
    if command not in command_list:
        raise Exception("command not found in the list {}".format(command_list))
    
    args = parse_args(command, sys.argv[2:])

    # call Command class to execute command
    try:
        c = Command(args)
        getattr(c, command)()
    except Exception as e:
        print(e)

if __name__ == "__main__":
    main()
