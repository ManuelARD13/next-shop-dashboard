import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';

export default function Modal2({ open, setOpen, children }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto bg-op-gray">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <XCircleIcon className="flex-shrink-0 h-6 w-6 text-gray-400 cursor-pointer" aria-hidden="true" onClick={() => setOpen(false)} ref={cancelButtonRef} />
                      </div>
                      <div className="mt-2">{children}</div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
