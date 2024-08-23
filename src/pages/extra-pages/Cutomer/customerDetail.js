import React, { useEffect, useState } from 'react'
import MainCard from 'components/MainCard';
import {
  Grid, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button
} from '@mui/material';
import DataTable from 'react-data-table-component';
import { ToastContainer } from 'react-toastify';

const CustomerDetail = () => {

  const initialData =
    [
      {
        userId: 'U001',
        millionname: 'Accounting Standard',
        name: "IFRS",
        mobile: 'IFRS',
        email: 'IFRS',
        variance: "",
        variancepercent: "",
      },
      {
        userId: 'U002',
        millionname: 'Audit Method',
        name: 'IFRS16 Adj',
        mobile: 'IFRS16 Adj',
        email: 'IFRS16 Adj',
        variance: "",
        variancepercent: "",

      },
      {
        userId: 'U003',
        millionname: 'Dispay Currency',
        name: 'HKD',
        mobile: 'HKD',
        email: 'HKD',
        variance: "",
        variancepercent: "",

      },
      {
        userId: 'U004',
        millionname: 'FX rate',
        name: '0.12826',
        mobile: '0.12826',
        email: '0.12826',
        variance: "",
        variancepercent: "",


      },
      {
        millionname: <b>Revenue</b>,
      },
      {
        userId: 'U005',
        millionname: 'Passenger',
        name: '4357.00',
        mobile: '14,333.00',
        email: '15,213.00',
        variance: "",
        variancepercent: "",


      },
      {
        userId: 'U006',
        millionname: 'Cargo',
        name: '35,814.00',
        mobile: '30,554.00',
        email: '29,312.00',
        variance: "",
        variancepercent: "",
      },
      {
        userId: '',
        millionname: '',
        name:"45587.00",
        mobile:"51036.00",
        email:"49761.00",
        variance: "",
        variancepercent: "",
      },
      {
        millionname: <b>Operating expenses</b>,
        name: '',
        mobile: '',
        email: '',
        variance: '',
        variancepercent: '',
      },
      {
        userId: 'U0013',
        millionname: 'Fuel',
        name: '4,357.00',
        mobile: '14,333.00',
        email: '',
        variance: '',
        variancepercent: '',
      },
      {
        userId: 'U008',
        millionname: 'Labour',
        name: '35,814.00',
        mobile: '30,554.00',
        email: '',
        variance: '',
        variancepercent: '',
      },
      {
        userId: 'U009',
        millionname: 'Landing fees',
        name: '35,814.00',
        mobile: '30,554.00',
        email: '',
        variance: '',
        variancepercent: '',
      },
      {
        userId: 'U010',
        millionname: 'Maintainance,material and..',
        name: '35,814.00',
        mobile: '30,554.00',
        email: '',
        variance: '',
        variancepercent: '',
      },
      {
        userId: 'other2',
        millionname: <b>Others +</b>,
      },
      {
        userId: 'U011',
        millionname: 'Inflight and Passenger..',
        name: '5,416.00',
        mobile: '6,149.00',
        email: '',
        variance: "",
        variancepercent: "",
      },
      {
        userId: 'U012',
        millionname: 'Restructuring cost',
        name: '385.00',
        mobile: '',
        email: '',
        variance: "",
        variancepercent: "",
      },
    ];
    // const isNumeric = (value) => {
    //   return !isNaN(parseFloat(value)) && isFinite(value);
    // };
  
    // const calculateTotals = (data) => {
    //   let totalName = 0;
    //   let totalMobile = 0;
    //   let totalEmail = 0;
  
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].millionname && data[i].millionname.props && data[i].millionname.props.children === 'Operating expenses') {
    //       break;
    //     }
    //     if (isNumeric(data[i].name)) totalName += parseFloat(data[i].name.replace(/,/g, '') || "0");
    //     if (isNumeric(data[i].mobile)) totalMobile += parseFloat(data[i].mobile.replace(/,/g, '') || "0");
    //     if (isNumeric(data[i].email)) totalEmail += parseFloat(data[i].email.replace(/,/g, '') || "0");
    //   }
  
    //   return { totalName, totalMobile, totalEmail };
    // };
  
    // const addTotalRow = (data) => {
    //   const totals = calculateTotals(data);
    //   const insertIndex = data.findIndex(row => row.millionname && row.millionname.props && row.millionname.props.children === 'Operating expenses');
    //   const totalRow = {
    //     millionname: '',
    //     name: totals.totalName.toFixed(2),
    //     mobile: totals.totalMobile.toFixed(2),
    //     email: totals.totalEmail.toFixed(2),
    //     variance: '',
    //     variancepercent: '',
    //   };
  
    //   const updatedData = [...data];
    //   updatedData.splice(insertIndex, 0, totalRow);
    //   return updatedData;
    // };
  
  const [newdata, setnewData] = useState(initialData)
  const [editingId, setEditingId] = useState(null);

  const [newRecordingId, setNewRecordingId] = useState('');

  useEffect(() => {
    const updatedData = newdata.map(row => {

      if (row.millionname === 'FX rate' ||
        row.millionname === 'Operating expenses' ||
        row.millionname === 'Fuel' ||
        row.millionname === 'Labour' ||
        row.millionname === 'Landing fees' ||
        row.millionname === 'Maintainance,material and..' ||
        row.millionname === 'Inflight and Passenger..' ||
        row.millionname === 'Restructuring cost') {
        return row;
      }
      const nameValue = row.name ? parseFloat(row.name.replace(/,/g, '')) : NaN;
      const mobileValue = row.mobile ? parseFloat(row.mobile.replace(/,/g, '')) : NaN;
      const emailValue = row.email ? parseFloat(row.email.replace(/,/g, '')) : NaN;
      if (!isNaN(nameValue) && !isNaN(mobileValue) && !isNaN(emailValue)) {
        const variance = emailValue - mobileValue;
        const variancePercent = (variance / mobileValue) * 100;
        return {
          ...row,
          variance: variance.toFixed(2),
          variancepercent: variancePercent.toFixed(2) + '%'
        };
      }
      return row;
    });
    setnewData(updatedData);
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({ millionname: '', name: '', mobile: '', email: '' });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleRowClick = (row) => {
    if (row.millionname.props.children === "Others +") {
      openModal();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleSubmit = () => {
    const newRow = {
      millionname: newEntry.millionname,
      name: newEntry.name,
      mobile: newEntry.mobile,
      email: newEntry.email,
      variance: "",
      variancepercent: "",
    };
    const updatedData = [
      ...newdata.slice(0, newdata.length - 1),
      newRow,
      newdata[newdata.length - 1]
    ];
    setnewData(updatedData);
    setNewEntry({ millionname: '', name: '', mobile: '', email: '' });
    closeModal();
  };
  const handleCellClick = (userId, currentId) => {
    setEditingId(userId)
    setNewRecordingId(currentId);
  };

  const handleeditInputChange = (e) => {
    setNewRecordingId(e.target.value);
  };
  const handleInputBlur = (id) => {
    const updatedData = newdata.map(row => {
      if (row.userId === id) {
        return { ...row, email: newRecordingId };
      }
      return row;
    });

    setnewData(updatedData);
    setEditingId(null);

  };

  const column = [
    {
      name: '(million)',
      selector: row => row.millionname,
      cell: row => (
        <div onClick={() => handleRowClick(row)}>
          {row.millionname}
        </div>
      ),
    },
    {
      name: "31-12-2021",
      selector: row => row.name,
    },
    {
      name: '31-12-2022',
      selector: row => row.mobile,
    },
    {
      name: '31-12-2024',
      cell: (row) =>
        editingId === row.userId ? (
          <input
            type="text"
            value={newRecordingId}
            onChange={handleeditInputChange}
            onBlur={() => handleInputBlur(row.userId)}
            autoFocus
          />
        ) : (
          <button
            onClick={() => handleCellClick(row.userId, row.email)}
            style={{
              background: 'none',
              border: 'none',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            {row.email}
          </button>
        ),
      width: "300px"
    },
    {
      name: 'Variance',
      selector: row => row.variance,
      cell: row => (
        <div style={{ color: row.variance >= 0 ? 'green' : 'red' }}>
          {row.variance}
        </div>
      ),
    },
    {
      name: "Variance%",
      selector: row => row.variancepercent,
      cell: row => (
        <div style={{ color: row.variancepercent >= 0 ? 'green' : 'red' }}>
          {row.variancepercent}
        </div>
      ),
    },
  ];
  const tableHeaderStyle = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "17px",
        backgroundColor: "rgba(241,244,249,255)",
      },
      head: {
        style: {
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }
      },
      cells: {
        style: {
          fontSize: "0.875rem",
          fontFamily: "'Public Sans',sans-serif",
        }
      }
    }
  }
  return (
    <MainCard title="">
      <Grid item xs={12} md={12} lg={12}>
        <Grid >
          <ToastContainer />
        </Grid>
        <div className=''>
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div>
                <button className='btn btn-primary m-2'
                  style={{ backgroundColor: 'white', border: '2px solid #EF9848', color: "black" }}>Profit & Loss</button>
              </div>
              <div>
                <button className='btn btn-primary m-2'
                  style={{ backgroundColor: 'white', border: '2px solid grey', color: "black" }}>Balance Sheet</button>
              </div>
              <div>
                <button className='btn btn-primary m-2'
                  style={{ backgroundColor: 'white', border: '2px solid grey', color: "black" }}>Cashflow</button>
              </div>
              <div>
                <button className='btn btn-primary m-2'
                  style={{ backgroundColor: 'white', border: '2px solid grey', color: "black" }}>Ratio</button>
              </div>
            </div>
            <div className='d-flex '>
              <div>
                <button className='btn btn-primary m-2'
                  style={{ backgroundColor: 'white', border: '2px solid grey', color: "black" }}> + Add Column</button>
              </div>
              <div>
                <button className='btn btn-primary m-2'
                  style={{ backgroundColor: 'white', border: '2px solid grey', color: "black" }}>Insert Comment</button>
              </div>
              <div>
                <button className='btn btn-primary m-2'
                  style={{ backgroundColor: 'white', border: '2px solid grey', color: "black" }}>Update Columns</button>
              </div>
            </div>
          </div>

          <DataTable
            columns={column}
            data={newdata}
            fixedHeader
            customStyles={tableHeaderStyle}
            className='data-ta#EF9848ble'
            // pagination
            subHeader
          />
        </div>
      </Grid>
      <Dialog open={modalIsOpen} onClose={closeModal} className='newClaimDiv'>
        <DialogTitle className='editTitle'>Add New Entry</DialogTitle>
        <DialogContent>
          <form>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <TextField
                  margin="dense"
                  label="Million Name"
                  type="text"
                  name="millionname"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value={newEntry.millionname}
                  onChange={handleInputChange}
                  className='editInputField'
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <TextField
                  margin="dense"
                  label="31-12-2021"
                  type="number"
                  name="name"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value={newEntry.name} onChange={handleInputChange}
                  className='editInputField'
                />
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <TextField
                  margin="dense"
                  label="31-12-2022"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="mobile" value={newEntry.mobile} onChange={handleInputChange}
                  className='editInputField'
                />

              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <TextField
                  margin="dense"
                  label="31-12-2024"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  name="email" value={newEntry.email} onChange={handleInputChange}
                  className='editInputField'
                />
              </div>
            </div>
            <br />
          </form>
        </DialogContent>
        <DialogActions className='editButtonDiv'>
          <Button onClick={closeModal} className='btn btn-primary' style={{ backgroundColor: '#EF9848', border: '0px' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className='btn btn-primary' style={{ backgroundColor: '#EF9848', border: '0px' }}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  )
}

export default CustomerDetail
