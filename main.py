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
from models import User
from models import Awards
from models import Profile
from google.appengine.api import users
#NEED TO FIGURE OUT FOR EVERYTHING HOW TO DEAL WITH A NEW USER


env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))

class MainHandler(webapp2.RequestHandler):
    #make an alert saying disclaimer bla bla bla, ask josh about what should go inside
    def get(self):
    	template=env.get_template('main.html')
        user = users.get_current_user()
        usernickname = user.nickname()
        redirect = users.create_logout_url('/')
        self.response.write(template.render({'user': True, 'usernickname':usernickname, 'redirect': redirect}))

        #templates:
            #gotta figure out how to transcribe this into html/jinja cuz right now it just ugly and bad
            #need an href that says aboutme
class AboutHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('about.html')
        self.response.write(template.render())
        #templates:
            #need just have a blurb about the goals etc in paragraph style

class AwardsHandler(webapp2.RequestHandler):
    def get(self):
        template=env.get_template('awards.html')
        self.response.write(template.render())
        #templates:
            #need just have a blurb about the goals etc in paragraph style

class WorkoutHandler(webapp2.RequestHandler):
    def get(self):
        template=env.get_template('workouts.html')
        self.response.write(template.render())
        #templates:
            #need just have a blurb about the goals etc in paragraph style

class RoutineHandler(webapp2.RequestHandler):
    def get(self):
        template=env.get_template('routine.html')
        self.response.write(template.render())
        #templates:
            #need just have a blurb about the goals etc in paragraph style

class WorkoutsHistoryHandler(webapp2.RequestHandler):
    def get(self):
        template=env.get_template('workout_history.html')
        self.response.write(template.render())
        #templates:
            #need just have a blurb about the goals etc in paragraph style

class ProfileHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('main.html')
        self.response.write(template.render())

   # #user
   # def post(self):
   #      template=env.get_template('main.html')
   #      user = User(name=self.request.get('name'), int(height=self.request.get('height')), int(weight=self.request.get('weight')), skill_level=self.request.get('skill_level'))
   #      user.put()
   #      self.response.write(template.render({'user':user}))
   #      #need to probably do this at login or from profile or something
   #      #need corresponding jinja

   # #awards
   # def post(self):
   #      template=env.get_template('awards.html')
   #      awards = Awards(login_awards=self.request.get('login_awards'), workout_awards=self.request.get('workout_awards'))
   #      awards.put()
   #      self.response.write(template.render({'awards':awards}))
   #      #might need to make a new template for this thing that might be the easiest that is rendered after clicking a link a side div with the dropdown menu thing
   #      #need corresponding jinja

   # #profile
   # def post(self):
   #      template=env.get_template('main.html')
   #      user = User.query(User.name == name).get()
   #      awards = Awards.query(User.name == name).get()
   #      profile = Profile(int(workout_data=self.request.get('workout_data')), routine=self.request.get('routine'), user_key=self.request.get(user.key), awards_key=self.request.get(awards.key))
   #      profile.put()
   #      self.response.write(template.render({'profile':profile}))
   #      #might need to make a new template for this thing that might be the easiest that is rendered after clicking a link a side div with the dropdown menu thing
   #      #need corresponding jinja
   #  #templates:
   #      #need new user button that pulls up a form if you click on it that allows you to implement the user properties with jinja
   #      #need tabs with workouts as an option and awards
   #      #need separate html that has all of the awards information on it

   #  #MIGHT NEED A WORKOUT_DATA HANDLER THAT LINKS TO THE FORM ON THE WORKOUT_HISTORY PAGE


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/about', AboutHandler),
    # the above can be a login or /login can be the login, either way
    ('/awards', AwardsHandler),
    ('/workout_history', WorkoutsHistoryHandler),
    ('/routine', RoutineHandler),
    ('/workouts', WorkoutHandler),
    ('/profile', ProfileHandler)
    #do awards last we need to think about this one and might be easier if not associated with awards, we can just link it to another page rather than having to deal with it all being on one page
    # maybe can just make a link to a separate file
], debug=True)

#figure out awards later
