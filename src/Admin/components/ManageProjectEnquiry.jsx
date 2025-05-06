import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "../styles/ManageProjectEnquiry.css";
import { MdDelete } from "react-icons/md";

const baseURL = import.meta.env.VITE_API_URL;

const ManageProjectEnquiry = () => {
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const role = JSON.parse(localStorage.getItem("userData"))?.role;

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchEntries = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/api/admin/service/getall`,
        {
          pageno: page,
          search,
          sortby: { createdAt: "desc" },
        },
        getAuthHeaders()
      );
      setEntries(res.data.data);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      setError("Failed to fetch project enquiry data.");
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [page, search]);

  const handleDelete = async (_id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This enquiry will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      await axios.post(
        `${baseURL}/api/admin/service/delete`,
        { _id },
        getAuthHeaders()
      );
      toast.success("Project enquiry deleted successfully!");
      fetchEntries();
    } catch (err) {
      toast.error("Failed to delete entry.");
    }
  };

  return (
    <div className="project-enquiries-container">
      <h2 className="project-enquiries-title">Project Enquiries</h2>

      <div className="project-enquiries-search">
        <input
          type="text"
          placeholder="Search by name, company, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <p className="project-enquiries-error">{error}</p>}

      {entries.length === 0 ? (
        <p className="project-enquiries-no-data">No entries found.</p>
      ) : (
        <div className="project-enquiries-table-wrapper">
          <table className="project-enquiries-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Services</th>
                <th>Budget</th>
                <th>Submited</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.fullname}</td>
                  <td>{entry.companyname}</td>
                  <td>{entry.email}</td>
                  <td>{entry.services}</td>
                  <td>{entry.estimatedbudget}</td>
                  <td>{new Date(entry.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="project-enquiries-pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page + 1 >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageProjectEnquiry;
