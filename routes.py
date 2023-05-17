from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    content = "Georgia Health Inspection!"
    return render_template('index.html', content=content)


@app.route('/last_inspection/<entity>')
def get_last_inspection(entity):
    # TODO
    # return json schema:
    # {
    #   inspection_id: <int>,
    #   score: <int>,
    #   inspection_date: <isoDateStr>,
    #   inspector: <str>,
    #   inspection_reason: <str>,
    #   inspection_page: <url>,
    #   items: [{
    #       violation: <str>,
    #       description: <str>,
    #       comment: <str>,
    #       corrected: <bool>
    #   },...]
    # }
    pass


@app.route('/all_inspections/<entity>')
def get_all_inspections(entity):
    # TODO
    # return json schema:
    # {inspections: [{inspection},{}...]}
    pass


@app.route('/violations/<entity>')
def get_violation_history(entity):
    # TODO
    # return json schema:
    # {violations: [{violation}, {}...]}
    # where violation :=
    # {
    #   violation: <str>,
    #   date: <isoDateStr>,
    #   description: <str>,
    #   comment: <str>,
    #   corrected: <bool>,
    #   inspection_id: <int>
    # }
    pass

# And any other routes that we deem necessary to tell whatever story it is we are wanting to tell


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3005, debug=True)
