import java.util.*;

public class LL{

	Node head;

	class Node{

		int data;
		Node next;


		Node(int data)
		{
			this.data=data;
			this.next=null;
		}
	}

	// add first

	public void addFirst(int data)
	{

		Node newNode = new Node(data);
		if(head==null)
		{
			head=newNode;
			return;
		}
		newNode.next=head;
		head=newNode;
	}

	// add last

	public void addLast(int data)
	{
		Node newNode = new Node(data);
		if(head==null)
		{
			head=newNode;
			return;
		}

		Node currNode=head;
		while(currNode.next!=null)
		{
			currNode=currNode.next;
			
		}
		currNode.next=newNode;
	}

	// add at specified position

	public void addSpecified(int position,int data)
	{
		Node newNode  = new Node(data);
		Node currNode=head;
	
		if(head==null)
		{
			head=newNode;
			return;
		}
		else if(position==1)
		{
			head=newNode;
			head.next=currNode;
			return;
		}

		for(int i=1;i<(position-1);i++)
		{
			currNode=currNode.next;
		}
		newNode.next=currNode.next;
		currNode.next=newNode;

	}

	// delete first

	public void deleteFirst()
	{
		if(head==null)
		{
			System.out.println("List is Empty.");
			return;
		}
		head=head.next;	
	}

	// delete last

	public void deleteLast()
	{
		if(head==null)
		{
			System.out.println("List is Empty.");
			return;
		}
		Node secondLast=head;
		Node lastNode=head.next;
		if(lastNode.next==null)
		{
			head=head.next;
		}
		while(lastNode.next!=null)
		{
			lastNode=lastNode.next;
			secondLast=secondLast.next;
		}
		secondLast.next=null;
	}

	// delete from specified position

	public void deleteSpecified(int position)
	{
		
		if(head==null)
		{
			System.out.println("Sorry , List is Empty.");
			return;
		}
		else if(position==1)
		{
			head=head.next;
			return;
		}

		Node secondLast=head;
		Node lastNode=head.next;

		for(int i=1;i<(position-1);i++)
		{
			secondLast=secondLast.next;
			lastNode=lastNode.next;
		}
		secondLast.next=lastNode.next;

	}

	// traversing all element of list or print the all element of list

	public void printList()
	{
		if(head==null)
		{
			System.out.println("List is Empty.");
			return;
		}
		Node currNode=head;
		while(currNode!=null)
		{
			System.out.print(currNode.data+" --> ");
			currNode=currNode.next;
		}
		System.out.println("NULL");
	}

	public static void main(String args[])
	{
		LL ob  = new LL();
		Scanner sc = new Scanner(System.in);

		while(true)
		{	
			System.out.println("\n********** LL's Opeation *********");
			System.out.println("**********************************");
			System.out.println("[1] Add Element at First");
			System.out.println("[2] Add Element at Last");
			System.out.println("[3] Add Element at Specific Position");
			System.out.println("[4] Delete Element From First");
			System.out.println("[5] Delete Element From Last");
			System.out.println("[6] Delete Element From Specific Position");
			System.out.println("[7] Traverse Or Print Elements");
			System.out.println("[8] Exit");
			System.out.println("\n**********************************");
			System.out.print("Enter Your Choice From Above : ");
			int c=sc.nextInt();	

			switch(c)
			{
				case 1:
				{
						System.out.print("Enter the element : ");
						int n=sc.nextInt();
						ob.addFirst(n);
						break;
				}
				case 2:
				{
						System.out.print("Enter the element : ");
						int n=sc.nextInt();
						ob.addLast(n);
						break;
				}
				case 3:
				{
						System.out.print("Enter the position where you want to add element : ");
						int p = sc.nextInt();
						System.out.print("Enter the element : ");
						int n=sc.nextInt();
						ob.addSpecified(p,n);
						break;
				}
				case 4:
				{
						ob.deleteFirst();
						break;
				}
				case 5:
				{
						ob.deleteLast();
						break;
				}
				case 6:
				{
						System.out.print("Enter the position of element which do you want to delete element : ");
						int p = sc.nextInt();
						ob.deleteSpecified(p);
						break;
				}
				case 7:
				{
						ob.printList();
						break;
				}
				case 8:
				{
						return;
				}
				default:
				{
						System.out.println("Sorry , Your Choice is invalid.");
				}
			}
		}
	}
}