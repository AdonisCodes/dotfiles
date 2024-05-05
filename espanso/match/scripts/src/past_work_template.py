from past_work import print_response
import sys

args = sys.argv[-1].split(',')
arg_str = ""
if len(args) == 1:
    arg_str = args[0]
if len(args) == 2:
    arg_str = args[0] + " and " + args[1]
if len(args) > 2:
    arg_str = ", ".join(args[:-1]) + " and " + args[-1]

print(f"""Hello!

I have experience in building apps using {arg_str}.
I have worked on a variety of projects in the past and I am confident that I can help you with your project.
Could we potentially have a chat to clarify on the requirements and scope of the project?
Thanks!

Here are some proof of my past work:""")

print_response()
