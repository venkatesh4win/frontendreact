import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'
import ReactTags from 'react-tag-autocomplete';
import Dropzone from 'react-dropzone';
import { Button, Modal } from 'react-bootstrap';
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
};
const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


export class BasicElements extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
      modal: false,
      audio: [],
      chapter: [{ id: 1, name: '', file: [], session: [{ id: 1, name: '', file: [] }] }]
    };
    this.onDrop = (index, acceptedFiles) => {
      console.log(index);
      const files = [...this.state.chapter]
     
      files[index].file.push(...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
      this.setState({
        chapter: files
      });
    }
    this.onDrop1 = (index,j, acceptedFiles) => {
      
      const files = [...this.state.chapter]
      console.log(files);
      files[index].session[j].file.push(...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
      this.setState({
        chapter: files
      });
    }
  }
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
  }
  openModal = (e, file) => {
    console.log(file)
    this.setState({
      modal: true,
      audio: file
    })

  }
  onCloseMedia = (e, index,k) => {
    e.stopPropagation();
    console.log(index);
    const files = [...this.state.chapter]
    files[index].file.splice(k, 1)
    console.log(files)
    this.setState({ chapter: files })
  }
  onCloseMedia1 = (e, index,j,k) => {
    e.stopPropagation();
    console.log(index);
    const files = [...this.state.chapter]
    files[index].session[j].file.splice(k, 1)
    console.log(files)
    this.setState({ chapter: files })
  }
  addSession = (e, i) => {
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter[i].session.push({ id: this.state.chapter[i].session[this.state.chapter[i].session.length - 1].id + 1, name: '',file: [] });
    this.setState({ chapter: chapter });
  }
  addChapter = (e) => {
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter.push({ id: this.state.chapter[this.state.chapter.length - 1].id + 1, name: '',file: [], session: [{ id: 1, name: '',file: [] }] });
    this.setState({ chapter: chapter });
  }
  deleteSession(e,i,j){
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter[i].session.splice(j, 1);
    this.setState({ chapter: chapter });
  }
  deleteChapter(e, index) {
    e.preventDefault();
    const chapter = [...this.state.chapter];
    chapter.splice(index, 1);
    this.setState({ chapter: chapter });
  }
  onSubmitApi = (e) => {

    // e.preventDefault();
  }
  render() {
    console.log(this.state.files)
    // const thumbs = this.state.files.map((file, i) => (
      
    // ));
    return (
      <div>

        <div className="row">

          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                {/* <h4 className="card-title">Horizontal Two column</h4> */}
                <form className="form-sample" onSubmit={(e) => this.onSubmitApi(e)}>
                  {/* <p className="card-description"> Personal info </p> */}
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group>
                        <label className="col-sm-3 col-form-label">Book Logo</label>
                        <div className="custom-file col-sm-9">
                          <Form.Control type="file" accept="image/*" className="form-control visibility-hidden" id="customFileLang" lang="es" />
                          <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Book Name</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Book Summary</label>
                        <div className="col-sm-9">
                          <textarea rows={5} className='form-control'></textarea>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Publication Name</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Year</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Book Category</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">

                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Authors</label>
                        <div className="col-sm-9">
                          <FormRepeater />
                        </div>
                      </Form.Group>


                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Tags</label>
                        <div className="col-sm-9">
                          <TagsInput />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Version/Edition</label>
                        <div className="col-sm-9">
                          <Form.Control type="text" />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Exam</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option></option>
                            <option>MPSC</option>
                            <option>UPSC</option>
                            <option>MPPSC</option>

                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Post</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option></option>
                            <option>IAS</option>
                            <option>IPS</option>
                            <option>PSI</option>
                            <option>ASO</option>
                            <option>RTO</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Publication</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option></option>
                            <option>Balbharti</option>
                            <option>NCERT</option>
                            <option>NIRALI</option>
                            <option>KSAGAR</option>
                          </select>
                        </div>
                      </Form.Group>
                    </div>

                  </div>
                  {/* <p className="card-description"> Address </p> */}
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Paper</label>
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" /> PRE
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> MAINS
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Subject</label>
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio5" id="membershipRadios1" /> History
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="form-check">
                            <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="ExampleRadio5" id="membershipRadios2" />Geography
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Language</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option></option>
                            <option>Marathi</option>
                            <option>Hindi</option>
                            <option>English</option>

                          </select>
                        </div>
                      </Form.Group>
                    </div>


                  </div>
                  
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.modal}
          onHide={() => this.setState({ modal: false })}
          aria-labelledby="example-modal-sizes-title-md"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.audio.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <audio style={{ width: '100%' }} src={this.state.audio.preview} controls></audio>


          </Modal.Body>

          {/* <Modal.Footer className="fleex-wrap">
                    <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
                    <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
                  </Modal.Footer> */}
        </Modal>
      </div>
    )
  }
}

export default BasicElements
class FormRepeater extends Component {
  constructor() {
    super();
    this.state = {
      users: [{ id: 1, name: '' }]
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event, index) {
    const users = this.state.users;
    users[index].name = event.target.value;
    this.setState(users);;
  }

  addUserInput = () => {
    const users = [...this.state.users];
    users.push({ id: this.state.users[this.state.users.length - 1].id + 1, name: '' });
    this.setState({ users: users });
  }

  deleteUser(index) {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users: users });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={(event) => { event.preventDefault(); }}>
        <div className="d-flex flex-column">
          {this.state.users.map((user, index) => {
            return (
              <div key={user.id} className="d-flex mb-2">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add user"
                    value={user.name}
                    onChange={(event) => this.inputChangeHandler(event, index)}
                  />
                </div>
                {(index > 0) ? <button className="btn btn-danger btn-sm icon-btn ml-2" onClick={() => this.deleteUser(index)}><i className="icon-trash"></i></button> : null}
              </div>
            )
          })}
        </div>
        <button className="btn btn-info btn-sm icon-btn ml-2 mb-2" onClick={this.addUserInput} >+</button>
      </form>
    )
  }
}
class AudioManage extends Component {
  constructor() {
    super();
    this.state = {
      users: [{ id: 1, name: '' }]
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event, index) {
    const users = this.state.users;
    users[index].name = event.target.value;
    this.setState(users);;
  }

  addUserInput = () => {
    const users = [...this.state.users];
    users.push({ id: this.state.users[this.state.users.length - 1].id + 1, name: '' });
    this.setState({ users: users });
  }

  deleteUser(index) {
    const users = [...this.state.users];
    users.splice(index, 1);
    this.setState({ users: users });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={(event) => { event.preventDefault(); }}>
        <div className="d-flex flex-column">
          {this.state.users.map((user, index) => {
            return (
              <div key={user.id} className="d-flex mb-2">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add user"
                    value={user.name}
                    onChange={(event) => this.inputChangeHandler(event, index)}
                  />
                </div>
                {(index > 0) ? <button className="btn btn-danger btn-sm icon-btn ml-2" onClick={() => this.deleteUser(index)}><i className="icon-trash"></i></button> : null}
              </div>
            )
          })}
        </div>
        <button className="btn btn-info btn-sm icon-btn ml-2 mb-2" onClick={this.addUserInput} >+</button>
      </form>
    )
  }
}
class TagsInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [
        { id: 1, name: "Audiobook" },
        { id: 2, name: "Podcast" },
        { id: 3, name: "Textbook" },
        { id: 4, name: "Inspiration" },
      ],
      suggestions: [
        { id: 5, name: "Motivation" },
        { id: 6, name: "Songs" },

      ]
    }
  }

  handleDelete(i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  handleAddition(tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }

  render() {
    return (
      <ReactTags
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        allowNew={true}
        handleDelete={this.handleDelete.bind(this)}
        handleAddition={this.handleAddition.bind(this)} />
    )
  }
}