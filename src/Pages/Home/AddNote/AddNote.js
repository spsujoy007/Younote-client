import React, { useState } from 'react';
import { FaPlus, FaRegImage } from 'react-icons/fa';
import { BsFillFileImageFill } from "react-icons/bs";

const AddNote = () => {


    return (
        <div className='h-[85vh] p-10 flex items-end justify-end'>
            {/* The button to open modal */}
<label htmlFor="addNoteModal" className="p-3 hover:cursor-pointer hover:bg-accent text-white bg-primary rounded-xl text-4xl"><FaPlus></FaPlus></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="addNoteModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="addNoteModal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>

    <form>
        <div className='md:flex gap-x-5 items-center py-3'>
        <div className='flex-1'>
        <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text">Title</span>
            </label>
            <input name='notetitle' type="text" placeholder="Note title" className="input input-bordered w-full max-w-xs" />
        </div>

        <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text">Note</span>
            </label>
            <textarea name='note' type="text" placeholder="Note" className="input input-bordered w-full max-w-xs h-[120px]" />
        </div>
        </div>

        <div>
        <label htmlFor="noteimg" className='flex items-center justify-center '>
        <div className='w-full h-full bg-primary hover:bg-secondary hover:cursor-pointer p-12 mt-5 rounded-xl text-white flex'>
                <BsFillFileImageFill className='text-5xl'></BsFillFileImageFill>
                <input type="file" id='noteimg' className='none hidden'/>
        </div>
            </label>
        </div>

        </div>
    </form>
    

  </div>
</div>
        </div>
    );
};

export default AddNote;