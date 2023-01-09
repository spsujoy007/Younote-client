import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsFillFileImageFill } from "react-icons/bs";

const AddNote = () => {

    const [modal, setModal] = useState(true)
    
    const [color, setColor] = useState('#ffffff');

    const handleColor = (hexcode) => {
        setColor(hexcode)
    }
    
    const handleAddNote = (event) => {
        event.preventDefault();
        const form = event.target;
        const notetitle = form.notetitle.value;
        const note = form.note.value;
        const picture = form.picture.files[0]
        console.log(notetitle, note, picture)
        setModal(false)
        setTimeout(setModal(true), 6000);

        const currentdate = new Date();
        const date = currentdate.toLocaleDateString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });

            const imgbbsecret = process.env.REACT_APP_IMGGBB_SECRET;
            const formData = new FormData();
            formData.append('image', picture);
            const url = `https://api.imgbb.com/1/upload?key=${imgbbsecret}`;
            fetch( url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(pictureData => {
                console.log(pictureData);
                const mynote = {
                    title: notetitle,
                    note: note,
                    picture: pictureData.data.url,
                    bgcolor: color,
                    date
                }
                
                fetch('http://localhost:5000/addnote', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(mynote)
                })
                .then(res => res.json())
                .then(data => {
                    
                })
            })

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
            <div className='flex gap-x-3 p-5'>
                <button onClick={() => handleColor('#FF6464')} className='bg-[#FF6464] w-8 h-8 rounded-md shadow-md'></button>
                <button onClick={() => handleColor('#453C67')} className='bg-[#453C67] w-8 h-8 rounded-md shadow-md'></button>
                <button onClick={() => handleColor('#ffffff')} className='bg-[#ffffff] w-8 h-8 rounded-md shadow-md'></button>
                <button onClick={() => handleColor('#54B435')} className='bg-[#54B435] w-8 h-8 rounded-md shadow-md'></button>
                <button onClick={() => handleColor('#100F0F')} className='bg-[#100F0F] w-8 h-8 rounded-md shadow-md'></button>
                <button onClick={() => handleColor('#C70039')} className='bg-[#C70039] w-8 h-8 rounded-md shadow-md'></button>
            </div>
            <button type='submit' className='btn btn-primary w-full text-white'>Add note</button>
        </div>

    </form>
    

  </div>
</div>
        </div>
    );
};

export default AddNote;