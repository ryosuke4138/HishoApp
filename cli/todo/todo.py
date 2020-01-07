import sys
import requests

API_BASE_URL = 'http://127.0.0.1:8000'

class Command():
    def __init__(self, args):
        self.args = args

    def create(self):
        title, description = self.args
        url = API_BASE_URL + '/api/'
        payload = {'title': title,
                  'description': description}
        res = requests.post(url, payload)
        data = res.json()
        print('task created(id={})\n{}: {}'.format(data['id'], data['title'], data['description']))
        return res

    def show(self):
        url = API_BASE_URL + '/api/'
        res = requests.get(url)
        for todo in res.json():
            print(str(todo['id']) + ': ' + str(todo['title']))
            print('  ', todo['description'])
            print('  ', todo['status'])
        return res

    def get(self):
        url = API_BASE_URL + '/api/'
        return(requests.get(url))

    def edit(self):
        id, status = self.args
        url = API_BASE_URL + '/api/{}/'.format(id)
        status_list = {'add': 'Unstarted', 
                       'start': 'In Progress', 
                       'end': 'Completed'}
        res = self.get()
        for todo in res.json():
            if str(todo['id']) == str(id):
                payload = {'id': id,
                        'title': todo['title'],
                        'description': todo['description'],
                        'status': status_list[status]}
        res = requests.put(url, payload)
        print('edited' if res.ok else 'some error occurred')
        return res

    def delete(self):
        id = self.args
        url = API_BASE_URL + '/api/{}/'.format(id)
        res = requests.delete(url)
        print('deleted' if res.ok else 'some error occurred')

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
        status_list = ['add', 'start', 'end']
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
