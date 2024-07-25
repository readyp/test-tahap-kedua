import React from 'react'
import { IUser } from '../store/api/home-api'

type UserDetailProps = {
  user: IUser
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  console.log(user)
  return (
    <>
      <div className="px-4 md:px-0">
        <section className="flex w-full flex-col rounded border bg-white p-4 shadow md:flex-row md:items-center md:justify-between">
          <div className="md:flex-1">
            <p className="mb-4 font-semibold">{user.greeting},</p>
            <p className="font-bold">{user.name}</p>
          </div>
          <div className="my-4 flex md:flex-1">
            <div
              className="mr-8 flex h-16 w-16 items-center justify-center rounded-full border shadow-xl hover:cursor-pointer"
              onClick={() => (document.getElementById('modal_qr_code') as HTMLDialogElement)?.showModal()}
            >
              <img
                className="h-10 w-10 object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"
                alt=""
              />
            </div>
            <div className="flex-1 space-y-4 border-l-2 border-dashed border-gray-500 pl-2">
              <div className="flex justify-between px-2">
                <p>Saldo</p>
                <p className="font-bold">Rp {user.saldo}</p>
              </div>
              <div className="flex justify-between px-2">
                <p>Point</p>
                <p className="font-bold text-green-500">{user.point}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <dialog id="modal_qr_code" className="modal">
        <div className="modal-box h-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="sm:text-md md:text-lg mt-4 font-semibold text-center">Show the QR Code below to the cashier</h3>
          {/* divider */}
          <div className='mt-12 md:mt-24' />
          <img className="object-fill" src={user.qrcode} alt="" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"
            alt=""
          />
        </div>
      </dialog>
    </>
  )
}

export { UserDetail }
