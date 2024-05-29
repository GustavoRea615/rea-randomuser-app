import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/button";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Select, SelectItem } from "@nextui-org/react";

import { Spinner } from "@nextui-org/spinner";
import { fetchUsers } from '../../services/userService';
import UserModal from './UserModal';
import { gendersData, nationalitiesData } from '../core/generals/conceptFilters';

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');

    const getUsers = async () => {
        try {
            setLoading(true);
            const filters = {};
            if (gender) filters.gender = gender;
            if (nationality) filters.nat = nationality;
            const usersData = await fetchUsers(20, filters);

            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRowClick = (user) => {
        setSelectedUser(user);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setModalVisible(false);
    };

    const handleSelectionChangeGender = (e) => {
        setGender(e.target.value);
    };

    const handleSelectionChangeNationality = (e) => {
        setNationality(e.target.value);
    };

    useEffect(() => {
        getUsers();
    }, [gender, nationality]);

    return (
        <div>
            <h1 className="my-4 title-section">Random User List</h1>
            
            <Select
                label="Gender"
                placeholder="Select an gender"
                className="max-w-xs filters-space"
                selectedKeys={[gender]}
                onChange={handleSelectionChangeGender}
            >
                {gendersData.map((element) => (
                    <SelectItem key={element.key}>
                        {element.label}
                    </SelectItem>
                ))}
            </Select>
            <Select
                label="Nationality"
                placeholder="Select an nationality"
                className="max-w-xs filters-space"
                selectedKeys={[nationality]}
                onChange={handleSelectionChangeNationality}
            >
                {nationalitiesData.map((element) => (
                    <SelectItem key={element.key}>
                        {element.label}
                    </SelectItem>
                ))}
            </Select>

            <Button onClick={getUsers} color="primary" className="filters-space">
                Refresh Users
            </Button>

            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Table
                        aria-label="Example table with dynamic content"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                    >
                        <TableHeader>
                            <TableColumn>PICTURE</TableColumn>
                            <TableColumn>NAME</TableColumn>
                            <TableColumn>EMAIL</TableColumn>
                            <TableColumn>PHONE</TableColumn>
                            <TableColumn>LOCATION</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={index} onClick={() => handleRowClick(user)} style={{ cursor: 'pointer' }}>
                                    <TableCell><img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} /></TableCell>
                                    <TableCell>{`${user.name.first} ${user.name.last}`}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{`${user.location.city}, ${user.location.country}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            )}
            <UserModal user={selectedUser} visible={modalVisible} onClose={handleCloseModal} />
        </div>
    );
};

export default UserList;
