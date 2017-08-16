from google.appengine.ext import ndb

class Routine(ndb.Model):
  quantity = ndb.StringProperty(repeated=True)
  description = ndb.StringProperty(repeated=True)
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  usernickname=ndb.StringProperty()

class Awards(ndb.Model):
  timestamp = ndb.DateTimeProperty(auto_now_add=True)
  routine_number=ndb.IntegerProperty()
  usernickname=ndb.StringProperty()
