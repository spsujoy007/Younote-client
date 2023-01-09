import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsFillFileImageFill } from "react-icons/bs";

const AddNote = () => {

    const [modal, setModal] = useState(true)
    
    // const handleModalTrue = () => {
    // }
    
    const handleAddNote = (event) => {
        event.preventDefault();
        const form = event.target;
        const notetitle = form.notetitle.value;
        const note = form.note.value;
        const picture = form.picture.files[0]
        console.log(notetitle, note, picture)
        setModal(false)
        setTimeout(setModal(true), 6000);
        alert('Note added successfully')
        form.reset()
    }

    return (
        <div className='h-[85vh] p-10 flex items-end justify-end'>
            {/* The button to open modal */}
<label htmlFor="addNoteModal" className="p-3 hover:cursor-pointer hover:bg-accent text-white bg-primary rounded-xl text-4xl"><FaPlus></FaPlus></label>

{/* Put this part before </body> tag */}
{
    modal && <input type="checkbox" id="addNoteModal" className="modal-toggle" />
}
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="addNoteModal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>

    <form onSubmit={handleAddNote}>
        <div className='md:flex gap-x-5 items-center py-3'>
        <div className='flex-1'>
        <div className="form-control w-full max-w-xs">
            <input name='notetitle' type="text" placeholder="Note title" className="input input-bordered w-full border-0 drop-shadow-md" />
        </div>

        <div className="form-control w-full max-w-xs mt-3">
            <textarea name='note' type="text" placeholder="Add your note hear" className="input input-bordered w-full  h-[120px] border-0 drop-shadow-md" />
        </div>

        </div>

        <div className='w-38 h-full bg-primary hover:bg-secondary text-white rounded-xl'>
        <label htmlFor="noteimg" className='flex items-center justify-center '>
        <div className='w-full h-full  hover:cursor-pointer p-12 rounded-xl flex'>
                <BsFillFileImageFill className='text-5xl'></BsFillFileImageFill>

                <input name='picture' type="file" id='noteimg' className='none hidden'/>
        </div>
            </label>
        </div>

        </div>

        <div>
            <button type='submit' className='btn btn-primary w-full text-white'>Add note</button>
        </div>

    </form>
    

  </div>
</div>
        </div>
    );
};

export default AddNote;