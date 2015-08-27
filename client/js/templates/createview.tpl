<form method="POST" action="http://localhost:3000/posts">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" name="title" id="title" placeholder="Title.." pattern="[a-zA-Z0-9\s]+" required>
  </div>
  <div class="form-group">
    <label for="body">Body</label>
    <textarea class="form-control" name="body" id="body" pattern="[a-zA-Z0-9\s]+" placeholder="Blog body.." rows="20" required></textarea>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>