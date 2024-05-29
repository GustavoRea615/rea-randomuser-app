import React from 'react';
import { Button } from '@nextui-org/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Image } from "@nextui-org/image";

const UserModal = ({ user, visible, onClose }) => {
    if (!user) return null;

    return (
        <>
            <Modal isOpen={visible} onClose={onClose} size={"3xl"}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {`${user.name.first} ${user.name.last}`}
                            </ModalHeader>
                            <ModalBody>

                                <div className="px-4 sm:px-0">
                                    <Image src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} width={100} height={100} />
                                </div>
                                <div className="mt-6 border-t border-gray-100">
                                    <h3 className="text-base font-semibold leading-7 text-gray-900">User Information</h3>
                                    <dl className="divide-y divide-gray-100">
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Age</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.dob.age}</dd>
                                        </div>
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                                        </div>
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.phone}</dd>
                                        </div>
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${user.location.city}, ${user.location.country}`}</dd>
                                        </div>
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Street</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${user.location.street.number} ${user.location.street.name}`}</dd>
                                        </div>
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">State</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.location.state}</dd>
                                        </div>
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Postcode</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.location.postcode}</dd>
                                        </div>
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Birthday</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(user.dob.date).toLocaleDateString()}</dd>
                                        </div>
                                    </dl>
                                </div>

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default UserModal;
