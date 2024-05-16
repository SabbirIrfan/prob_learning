import json
import falcon

class RequestClass:
    def on_get(self, req, resp):  
        content = {
            'name': 'sabbir irfan',
            'using': 'falcon api framework in python'
        }

        resp.body = json.dumps(content)

api = falcon.API() 
api.add_route('/', RequestClass())
