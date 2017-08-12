#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import webapp2
import jinja2
# from models import 

env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))

class MainHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('login.html')
        # self.response.write('Hello world!')
        self.response.write(template.render())

class AboutHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('about.html')
        # self.response.write('Hello world!')
        self.response.write(template.render())

class ProfileHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('main.html')
        # self.response.write('Hello world!')
        self.response.write(template.render())

class WorkoutsHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('workouts.html')
        # self.response.write('Hello world!')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/about', AboutHandler),
    # the above can be a login or /login can be the login, either way
    ('/profile', ProfileHandler),
    ('/workouts', WorkoutsHandler)
    #do awards last we need to think about this one and might be easier if not associated with awards, we can just link it to another page rather than having to deal with it all being on one page
    # maybe can just make a link to a separate file
], debug=True)

#figure out awards later
