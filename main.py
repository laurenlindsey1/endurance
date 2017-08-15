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
from models import Routine
from google.appengine.api import users
#NEED TO FIGURE OUT FOR EVERYTHING HOW TO DEAL WITH A NEW USER
# from datetime import date

env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))

class MainHandler(webapp2.RequestHandler):
    #make an alert saying disclaimer bla bla bla, ask josh about what should go inside
    def get(self):
    	template=env.get_template('main.html')
        user = users.get_current_user()
        usernickname = user.nickname()
        redirect = users.create_logout_url('/')
        self.response.write(template.render({'user': True, 'usernickname':usernickname, 'redirect': redirect}))

class AboutHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('about.html')
        self.response.write(template.render())

<<<<<<< HEAD
# class UserHandler(webapp2.RequestHandler):
#     def get(self):
#         template=env.get_template('create_user.html')
#         user=User(
#             user_name=self.request.get('user_name'),
#             height=int(self.request.get('height')),
#             weight=int(self.request.get('weight')),
#             skill_level=self.request.get('skill_level'),
#             birthdate=date(self.request.get('birthdate')),
#             timestamp=date(self.request.get('timestamp'))
#             )
#         key=user.put()
#         #need something to make sure they only do this once
#         self.response.write(template.render())
=======
class UserHandler(webapp2.RequestHandler):
    def get(self):
        template=env.get_template('create_user.html')
        user=User(
            user_name=self.request.get('user_name'),
            timestamp=date(self.request.get('timestamp')) #how to make regular timestamp            
            )   
        key=user.put()
        #need something to make sure they only do this once
        self.response.write(template.render())
>>>>>>> ae9a51148ccaab293c4161dab9ee2af533bdd677

# class RoutineHandler(webapp2.RequestHandler):
#     def get(self):
#         template=env.get_template('routine.html')
#         routine=Routine(
#             quantity=int(self.request.get('quantity')),
#             description=self.request.get('description')
#             )
#         key=routine.put()
#         self.response.write(template.render())

# class AwardsHandler(webapp2.RequestHandler):
#     def get(self):
#         template=env.get_template('awards.html')
#         timestamp=self.request.get("timestamp")
#         user_name=self.request.get("user_name")
#         user = User.query(User.user_name == user_name).get()
#         routine = Routine.query(Routine.timestamp == timestamp).fetch()
#         award = Award(
#             category=self.request.get('category'),
#             timestamp = date(self.request.get('timestamp')),
#             user_key = self.request.get(user.key),
#             routine_key = self.request.get(routine.key)
#             )
#         key=award.put()
<<<<<<< HEAD
#         self.response.write(template.render())
#         #need jinja and need to render the correct variables
=======
#         self.response.write(template.render({'category':category,'timestamp':timestamp, }))
#         #need to write congratulations {{user_key}}! You recieved an award for complete x number of routines
#         #need jinja and need to render the correct variables 
>>>>>>> ae9a51148ccaab293c4161dab9ee2af533bdd677
#         #need to check it is okay with the index issue and how he was saying use activity rather than user do I even need it user
#         #for jinja do up by powers of 10 in terms of notification 
#     # YOU NEED TO MAKE A FUNCTION THAT WILL SEND BACK AN AWARD AFTER THE USER INPUTS 

# class WorkoutHandler(webapp2.RequestHandler):
#     def get(self):
#         template=env.get_template('workouts.html')
#         self.response.write(template.render())
#         #need youtube api

# class WorkoutsHistoryHandler(webapp2.RequestHandler):
#     def get(self):
#         template=env.get_template('workout_history.html')
#         routine_key=self.request.get('routine_key') #what we are submitting is in the param
#         history = Routine.query(Routine.routine_key == routine_key).fetch()
#         self.response.write(template.render({'history':history, 'routine':routine}))

class ProfileHandler(webapp2.RequestHandler):
    def get(self):
    	template=env.get_template('main.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/about', AboutHandler),
    # ('/workout_history', WorkoutsHistoryHandler),
    ('/create_user',UserHandler),
    # ('/routine', RoutineHandler),
    # ('/awards', AwardsHandler),
    ('/workouts', WorkoutHandler),
    ('/profile', ProfileHandler)
], debug=True)
#figure out awards later
