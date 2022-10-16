#include<stdio.h> 

int main()
{ 
	int i; //integer value for variable "i" 
	int buffer[8]; //an array of integers called "buffer" of up to 8 chars 
	int num; //integer value for variable “num” 
	
	printf("\nEnter number of integers:"); //get user’s input on the # of ints 
	scanf("%d", &num); //place values into the “num” variable 

	//Read into array section 
	printf("\nEnter the values :"); //get the integers from the user 
	for (i = 0; i < num; i++)
	{ //loop to read the integers into the “buffer” 
		scanf("%d", &buffer[i]);
	} 
	
	//Print the array of integers 
	for (i = 0; i < num; i++)
	{ //loop thru buffer and print integers 
		printf("\nbuffer[%d] = %d", i, buffer[i]);
	} 
	
	return (0); //end the program 
}