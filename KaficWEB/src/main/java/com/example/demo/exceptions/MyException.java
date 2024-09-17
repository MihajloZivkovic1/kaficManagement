package com.example.demo.exceptions;

public class MyException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MyException(String poruka) {
		super(poruka);
	}
	
}
