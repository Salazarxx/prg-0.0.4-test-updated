from flask import Flask,render_template
app=Flask(__name__)

@app.route('/')
def main():
    return render_template('/index.html')
@app.route('/page2')
def page2():
    return render_template('/index2.html')
@app.route('/footer')
def footer():
    return render_template('/footer.html')
if __name__=='__main__':
    app.run(debug=True)
