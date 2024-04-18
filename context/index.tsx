"use client"
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ProviderType {
	id: string;
	type: string
	admission: string
	isOpen: boolean;
	openModal: (id: string, type: string, admissionId: string) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<ProviderType>({
	id: "",
	type: "",
	admission: "",
	isOpen: false,
	openModal: () => { },
	closeModal: () => { },
});

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState("");
	const [type, setType] = useState("");
	const [admission, setAdmission] = useState("");

	// "meet", "classic", "consultation", "admission" //TYPES

	const openModal = (courseId: string, type: string, admissionId: string) => {
		setIsOpen(true);
		setId(courseId);
		setType(type)
		setAdmission(admissionId)
	};

	const closeModal = () => {
		setIsOpen(false);
		setId("");
		setType("")
		setAdmission("")
	};

	return (
		<ModalContext.Provider value={{ id, type, admission, isOpen, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};
