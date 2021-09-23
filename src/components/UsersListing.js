import React, { Component } from "react";
import { SignupActions } from "../Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReactPaginate from "react-paginate";
import Header from "./CommonHeader";
// import Switch from "react-switch";



class addCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    SignupActions.allUsers({}, (err, res) => {
      if (!err) {
        this.setState({
          users: res.data,
        //   count:res.count,
        //   pageCount: Math.ceil(res.count / this.state.userlimit),
        //   loading: false,
        });
      }
    });
  }
  fetchNextList(pageNumber) {
    let page = pageNumber.selected + 1;
    this.setState(
      {
        pageNo: page,
      },
      () => {
        this.fetchData();
      }
    );
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )
  render() {
    const {
      users,
    } = this.state;
    return (
      <div
        id="page-container"
        className="sidebar-o enable-page-overlay side-scroll page-header-modern"
      >
        <ToastContainer> </ToastContainer>

        <Header></Header>
        <main id="main-container">
          <div className="content" style={{ paddingTop: 0 }}>
            <div className="row mb-30 mt-30">
              <div className="col-3">
                <h2>Users</h2>
              </div>
            </div>
            {false ? (
              this.loading()
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="block">
                    <div className="block-content block-content-full pt-30">
                      <div class="table-responsive">
                        <table className="table table-striped table-borderless table-vcenter dataTable no-footer">
                          <thead
                            style={{
                              verticalAlign: "baseline",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <tr>
                              <th className="text-black">
                                <b>First Name</b>
                              </th>
                              <th className=" text-black">
                              <b>Last Name</b>
                              </th>
                              <th className=" text-black">
                                <b>Email</b>
                              </th>
                              <th className=" text-black">
                                <b>User Name</b>
                              </th>
                              <th className=" text-black">
                                <b>Phone Number</b>
                              </th>
                              <th className=" text-black">
                                <b>Address</b>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {users.map((b) => {
                              let id = b._id;
                              return (
                                <tr>
                                  <td className="font-w600">
                                    {b && b.firstName ? b.firstName : ""}
                                  </td>

                                  <td className="font-w600">
                                    {b && b.lastName ? b.lastName : ""}
                                  </td>                     
                                       <td className="font-w600">
                                    {b && b.email ? b.email : ""}
                                  </td> 
                                <td className="font-w600">
                                    {b && b.userName ? b.userName : ""}
                                  </td> 
                                  <td className="font-w600">
                                    {b && b.phoneNumber ? b.phoneNumber : ""}
                                  </td> 
                                  <td className="font-w600">
                                    {b && b.addressLine ? b.addressLine + " ," + b.city + " ," + b.state  : ""}
                                  </td>                                 </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>{" "}
                      <br />
                      {/* <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={this.state.userCount}
                        pageRangeDisplayed={this.state.userlimit}
                        onPageChange={this.fetchNextList}
                        containerClassName={"pagination-student"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        forcePage={this.state.pageNo - 1}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default addCategory;
