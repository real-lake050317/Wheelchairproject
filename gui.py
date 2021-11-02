import tkinter
window = tkinter.Tk()
window.title("wheelchair project")

#window.attributes('-fullscreen', True)

b1 = tkinter.Button(window, text="map")
b2 = tkinter.Button(window, text="work")
b3 = tkinter.Button(window, text="info")
b4 = tkinter.Button(window, text="sms")

b1.place(relwidth = 0.5, relheight = 0.25, relx = 0.05, rely = 0.05)
b2.place(relwidth = 0.5, relheight = 0.25, relx = 0.05, rely = 0.37)
b3.place(relwidth = 0.5, relheight = 0.25, relx = 0.05, rely = 0.7)
b4.place(relwidth = 0.3, relheight = 0.9, relx = 0.6, rely = 0.05)
window.mainloop()