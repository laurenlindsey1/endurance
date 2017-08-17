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
import urllib2
import urllib
import json
from models import Awards
from models import Routine
from google.appengine.api import users

env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'))

class MainHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('main.html')
    user = users.get_current_user()
    usernickname = user.nickname()
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'user': True, 'usernickname':usernickname, 'redirect': redirect}))

class AboutHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('about.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

#make sure it's working 
class RoutineHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('routine.html')
    user=users.get_current_user()
    usernickname = user.nickname()
    redirect = users.create_logout_url('/')
    quantities = self.request.get_all('quantity')
    descriptions = self.request.get_all('description')
    for (quantity, description) in zip(quantities, descriptions):
      Routine(
        usernickname=usernickname,
        quantity=quantity,
        description=description
      ).put()
    self.response.write(template.render({'redirect': redirect}))

class AwardsHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('awards.html')
    user=users.get_current_user()
    usernickname = user.nickname()
    redirect = users.create_logout_url('/')
    routine_number = (Routine.query(Routine.usernickname == usernickname)).count()
    award = Awards(
      routine_number=routine_number,
      usernickname=usernickname
      )
    if (int(award.routine_number)%5==0 and int(award.routine_number)>=5):
      giphy_data_source = urllib2.urlopen("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&limit=10&tag=congratulations&rating=g")
      giphy_json_content = giphy_data_source.read()
      parsed_giphy_dictionary = json.loads(giphy_json_content)
      gif_url = parsed_giphy_dictionary['data']["image_original_url"]
      key=award.put()
      self.response.write(template.render({'routine_number':award.routine_number,'gif':gif_url,'redirect': redirect}))
    else:
      key=award.put()
      self.response.write(template.render({'routine_number':award.routine_number,'redirect': redirect}))

class WorkoutHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('workouts.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

class WorkoutsHistoryHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('workout_history.html')
    user = users.get_current_user()
    usernickname = user.nickname()
    redirect = users.create_logout_url('/')
    # timestamp=Routine.timestamp
    history=Routine.query(Routine.usernickname == usernickname).fetch()
    # self.response.write(history)
    # for routine in history:
      # str(routine.timestamp) + ":" + str(routine.quantity) + "," + str(routine.description)
    self.response.write(template.render({'history':history,'redirect': redirect}))

class HowToHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('workouthowto.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

class UpperHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('upperbody.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

class LowerHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('lowerbody.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

class AbsHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('abs.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

class InstructionsHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('instructions.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

class SuppliesHandler(webapp2.RequestHandler):
  def get(self):
    template=env.get_template('supplies.html')
    redirect = users.create_logout_url('/')
    self.response.write(template.render({'redirect': redirect}))

app = webapp2.WSGIApplication([
  ('/', MainHandler),
  ('/about', AboutHandler),
  ('/workout_history', WorkoutsHistoryHandler),
  ('/routine', RoutineHandler),
  ('/awards', AwardsHandler),
  ('/workouts', WorkoutHandler),
  ('/workouthowto', HowToHandler),
  ('/upperbody', UpperHandler),
  ('/lowerbody', LowerHandler),
  ('/abs', AbsHandler),
  ('/instructions', InstructionsHandler),
  ('/supplies', SuppliesHandler)
], debug=True)
