import java.util.*;

public class CLL{

	Node head,tail;

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
			tail=newNode;
			newNode.next=head;
			return;
		}
		newNode.next=head;
		head=newNode;
		tail.next=head;
		
	}

	// add last

	public void addLast(int data)
	{
		Node newNode = new Node(data);
		if(head==null)
		{
			head=newNode;
			tail=newNode;
			newNode.next=head;
			return;
		}
		tail.next=newNode;
		tail=newNode;
		newNode.next=head;
	}

	// add at specified position

	public void addSpecified(int position,int data)
	{
		Node newNode = new Node(data);
		Node currNode=head;

		if(head==null)
		{
			head=newNode;
			tail=newNode;
			newNode.next=head;
			return;
		}
		else if(position==1)
		{
			addFirst(data);
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
		else if(head==tail)
		{
			head=null;
			tail=null;
			return;
		}
		head=head.next;	
		tail.next=head;
	}

	// delete Last

	public void deleteLast()
	{
		if(head==null)
		{
			System.out.println("List is Empty.");
			return;
		}
		else if(head==tail)
		{
			head=null;
			tail=null;
			return;
		}
		
		Node secondLast =head;
		Node lastNode=head.next;

		while(lastNode.next!=head)
		{
			secondLast=secondLast.next;
			lastNode=lastNode.next;
		}
		tail=secondLast;
		tail.next=head;
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
			deleteFirst();
			return;
		}

		Node secondLast =head;
		Node lastNode=head.next;

		for(int i=1;i<(position-1);i++)
		{
			secondLast=secondLast.next;
			lastNode=lastNode.next;
		}
		secondLast.next=lastNode.next;
	}	

	//traverse or display

	public void printList()
	{
		if(head==null)
		{
			System.out.println("List is Empty.");
			return;
		}
		Node currNode = head;
		do
		{
			System.out.print(currNode.data+" --> ");
			currNode=currNode.next;
		}while(currNode!=head);
		System.out.print(head.data+" (head)"+"\n");
	}

	public static void main(String args[])
	{
		CLL ob = new CLL();
		
		Scanner sc = new Scanner(System.in);

		while(true)
		{	
			System.out.println("\n********** CLL's Opeation *********");
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
						System.out.print("Enter the position of element which do you want to delete : ");
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