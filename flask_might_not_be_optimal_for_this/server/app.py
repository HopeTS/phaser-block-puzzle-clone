from flask import Flask


'''
Flask app config
'''

app = Flask(__name__)


'''
Routes
'''

# Home page
@app.route('/')
def home_screen():
    return Flask.render_template('../client/public/index.html')


'''
Run
'''

if __name__ == '__main__':
    app.run(use_reloader=True, debug=True)