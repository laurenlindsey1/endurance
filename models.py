from google.appengine.ext import ndb

class Routine(ndb.Model):
  quantity = ndb.StringProperty()
  description = ndb.StringProperty()
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  # user_id = ndb.StringProperty()
  usernickname=ndb.StringProperty()

class Awards(ndb.Model):
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  routine_number=ndb.IntegerProperty()
  usernickname=ndb.StringProperty()
  # user_id=ndb.StringProperty()
