import random
import time
while True:
    with open('prng-service.txt', 'r+') as f:
        check = f.read()
        if check == "run":
            f.seek(0)
            f.truncate()
            f.write(str((random.randint(1,4))))
    time.sleep(20)
            
        
        
