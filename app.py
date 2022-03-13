from flask import * 
import os 
import sys

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")
	
	
@app.route("/about")
def about():
	return render_template("about.html")
	
@app.route("/contact")
def contact():
	return render_template("contact.html")
	
@app.route("/source")
def source_code():
	return render_template("source-code.html")

if __name__=="__main__":
	app.run(debug=True)