import tkinter as tk
import time
from PIL import Image

window = tk.Tk()
def buttonClick():
    with open('prng-service.txt', 'r+') as f:
        f.seek(0)
        f.truncate()
        f.write('run')
        window.destroy()


button = tk.Button(
    text="Click me to see a picture!",
    width=25,
    height=5,
    bg="blue",
    fg="yellow",
    command = buttonClick
)

button.pack()
window.mainloop()

def writeImage():
    with open('image-service.txt', 'r+') as f:
        if len(f.read()) <= 1:
            f.seek(0)
            f.truncate()
            f.write(check)

def displayImage():
    p = Image.open(check)
    p.show()
    exit()


while True:
    with open('prng-service.txt', 'r+') as f:
        check = f.read()
        if len(check) == 1:
            writeImage()

    with open('image-service.txt', 'r+') as f:
        check = f.read()
        if len(check) > 1:
            displayImage()
    time.sleep(30)





