import pandas as pd,paho.mqtt as mqtt,requests as r
from flask import Flask,request,jsonyfi,render_template,url_for
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/")
def index():
    return render_template("index.html")
@app.route("/formulario-registro",methods ["GET,POST"])
def formulario_registro():
    return ""
app.run("0.0.0.0",port = 8897,debug = False)