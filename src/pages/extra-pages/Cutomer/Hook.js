// import { baseURLProd } from 'api/api';
import React,{  useState } from 'react';
// import { toast } from 'react-toastify';
const Hook = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])
    const [openPreview, setOpenPreview] = useState(false);
    const [previewImageUrl, setPreviewImageUrl] = useState('');
    const [open, setOpen] = useState(false)
    const [selectopen, setSelectOpen] = useState(false)
    const [addNewopen, setAddnewOpen] = useState(false)
    const [serviceproviderOpen, setServiceproviderOpen] = useState(false)
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [preview, setPreview] = useState(false)
    const [upload, setUpload] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const [selectedDocuments, setSelectedDocuments] = React.useState([]);

    const handleselectChange = (event) => {
      setSelectedDocuments(event.target.value);
    };
    //---------------------fetch data---------------//
    // const fetchData = async () => {
    //     try {
    //         let req = await fetch(`${baseURLProd}AppUserDetails`, {
    //             method: "GET",
    //             'Content-Type': 'application/json',


    //         })
    //         const res = await req.json();
    //         setData(res.appUserDetailsList);
    //         setFilter(res.appUserDetailsList)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    //------------------------serach by userid-----------//
    // useEffect(() => {
    //     const result = data.filter((item) => {
    //         return item.userId.toLowerCase().match(search.toLocaleLowerCase())
    //     })
    //     setFilter(result)
    // }, [search])

    // const handleSearch = () => {
    //     const result = data.filter((item) => {
    //       return item.userId.toLowerCase().match(search.toLowerCase());
    //     });
    //     setFilter(result);
    //   };
    
    //   const handleReset = () => {
    //     setSearch('');
    //     setFilter(data);
    //   };
    //---------------------------delete user------------------//
    // const handleDelete = async (userId) => {
    //     await fetch(`${baseURLProd}DeleteVideo`, {
    //         method: "POST",
    //         body: JSON.stringify({ userId: userId }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const newData = data.filter(row => (row.userid !== userId));
    //     setFilter(newData);
    //     fetchData();
    //     toast.success("User Detail deleted successfully")
    // }
    //----------------get user detail---------------//
    // const handleEdit = async () => {
    //     setOpen(true);
    //     // setUserId(userId)
    //     // setName(name)
    //     // setMobile(mobile)
    //     // setEmail(email)
    //     // setPassword(password)
    //     // setDob(dob)

    // }
    const handlePreview = (row) => {
        setSelectedRow(row);
        setPreview(true);
      };
    const handleClosePreview = () => {
        setPreview(false)
    }
    const handleUpload = () => {
        setUpload(true)
    }
    const handleCloseUpload = () => {
        setUpload(false)
    }
    const handleEdit = async () => {
        setOpen(true);
    } 
    const handleClose = () => {
        setOpen(false)
    }
    const handleFileChange = (event) => {
      setSelectedFiles(event.target.files);
    };
    const HandleSelectStatus = async () => {
        setSelectOpen(true);
    } 
    const handleSelectClose = () => {
        setSelectOpen(false)
    }
    const handleAddNew = async () => {
        setAddnewOpen(true);
    } 
    const handleAddNewClose = () => {
        setAddnewOpen(false)
    }
    const handleServiceProvider = async () => {
        setServiceproviderOpen(true);
    } 
    const handleCloseserviceProvider = () => {
        setServiceproviderOpen(false)
    }
    //-----------------------edit user detail ------------------//
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         if (window.confirm('Are you sure you want to change the details?')) {
    //         const response = await fetch(`${baseURLProd}UserEditDetails`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 userId: userId,
    //                 name: name,
    //                 email: email,
    //                 mobile: mobile,
    //                 dob: dob,
    //                 password: password,
    //             }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to edit user details');
    //         }

    //         await response.json();
    //             fetchData()
    //             setOpen(false);
    //             setUserId("")
    //             setName("")
    //             setMobile("")
    //             setEmail("")
    //             setPassword("")
    //             setDob("")
    //             toast.success("user details changed ")
    //           }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };
    //----------------------image download-------------------//
    // const handleDownload = (imageUrl, imageName) => {
    //     fetch(imageUrl)
    //         .then(response => response.blob())
    //         .then(blob => {
    //             const link = document.createElement('a');
    //             const objectURL = URL.createObjectURL(blob);
    //             link.href = objectURL;
    //             link.download = imageName;
    //             link.click();
    //             URL.revokeObjectURL(objectURL);
    //         })
    //         .catch(error => console.error('Error downloading image:', error));
    // };
   //------------image click --------------------//
    const handleImageClick = (imageUrl) => {
        setPreviewImageUrl(imageUrl);
        setOpenPreview(true);
    };

    // const handleClosePreview = () => {
    //     setOpenPreview(false);
    // };

    // ----------------CSV file download---------------------//
    // const downloadCSV = () => {
    //     const csvContent =
    //         "data:text/csv;charset=utf-8," +
    //         [
    //             Object.keys(filter[0]).join(','), // Header row
    //             ...filter.map((row) => Object.values(row).join(',')), // Data rows
    //         ].join('\n');

    //     const encodedUri = encodeURI(csvContent);
    //     const link = document.createElement("a");
    //     link.setAttribute("href", encodedUri);
    //     link.setAttribute("download", "Appuser_details.csv");
    //     document.body.appendChild(link);
    //     link.click();
    // };

    return {
        filter, search, openPreview, previewImageUrl, setSearch, setOpenPreview, setPreviewImageUrl,setOpen,setPreview,handleCloseUpload,
        handlePreview,handleUpload,handleClosePreview, handleImageClick, handleEdit,handleFileChange,data,selectedRow,
        open, handleClose, userId, name, dob, mobile, email, password, setUserId, setName, setDob, setMobile, setEmail, setPassword,setData,setFilter,preview,upload,
        selectopen,setSelectOpen,HandleSelectStatus,handleSelectClose,addNewopen,handleAddNew,handleAddNewClose,
        serviceproviderOpen,handleServiceProvider,handleCloseserviceProvider,selectedFiles,selectedDocuments,handleselectChange
    }
}

export default Hook
