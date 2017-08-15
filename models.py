from google.appengine.ext import ndb

class Routine(ndb.Model):
  quantity = ndb.StringProperty()
  description = ndb.StringProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  user_id = ndb.StringProperty()
#for the + button on activities need jinja sayin gif click then add form and break if press submit 


class Awards(ndb.Model):
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  routine_key = ndb.KeyProperty()

class Profile(ndb.Model):
  user_id = ndb.StringProperty()
  name = ndb.StringProperty()


  #jquery append

