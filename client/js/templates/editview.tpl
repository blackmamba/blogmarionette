<form method="POST" action="http://localhost:3000/posts">
  <input type="hidden" id="id" value="<%-id%>">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" name="title" id="title" placeholder="Title.." pattern="[a-zA-Z0-9\s]+" value="<%-title%>" required>
  </div>
  <div class="form-group">
    <label for="body">Body</label>
    <textarea class="form-control" name="body" id="body" pattern="[a-zA-Z0-9\s]+" placeholder="Blog body.." rows="20" required><%-body%></textarea>
  </div>
  <button type="button" class="btn btn-default save">Save</button>
  <button type="button" class="btn btn-default cancel">Cancel</button>
</form>