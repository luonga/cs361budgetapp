import time
while True:
    with open('image-service.txt', 'r+') as f:
        check = f.read()
        if check == '1':
            f.seek(0)
            f.truncate()
            f.write('Images/black.jpg')
        elif check == '2':
            f.seek(0)
            f.truncate()
            f.write('Images/red.jpg')
        elif check == '3':
            f.seek(0)
            f.truncate()
            f.write('Images/blue.jpeg')
        elif check == '4':
            f.seek(0)
            f.truncate()
            f.write('Images/yellow.jpg')
    time.sleep(25)