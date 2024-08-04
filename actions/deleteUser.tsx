const deleteUser = async (id: number) => {
      
       await fetch(`https://dv2.brontosolutions.com:8000/assignment/userprofiles/delete/${id}/`, {
        method: 'DELETE',
      });
      
    
    };
export default deleteUser