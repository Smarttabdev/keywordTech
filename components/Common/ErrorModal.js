

const ErrorModal = ({ content }) =>
{
  return (
    <div class="modal fade" id="modalerror" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><b>Error!</b></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="myInput.focus();"></button>
          </div>
          <div class="modal-body" id="modalerrordiv">
            <a id="modalerrora" style='display: flex; align-items: center;  justify-content: space-between;  padding: 10px 0 10px 10px; font-family: "Krub", sans-serif; font-size: 17px;font-weight: 600;color: #2d405f;white-space: nowrap;  transition: 0.3s;'>{content}</a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="myInput.focus();">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal