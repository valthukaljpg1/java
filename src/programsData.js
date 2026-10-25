// Lab Programs Data extracted from the provided laboratory manual
export const programsData = [
  {
    id: 1,
    number: "Program 1",
    title: "PACKAGE EMPLOYEE",
    aim: "To create a user-defined package named 'employee' containing an Employee class with methods to set and display employee details, and access it from another class.",
    algorithm: [
      "Create a package named 'employee'.",
      "Define a public class Employee inside the package with private fields empNo (int) and basicPay (double).",
      "Define a constructor Employee(int empNo) to initialize the employee number.",
      "Create public methods setBasicPay(double pay) to update the salary and display() to print employee details.",
      "In the same package, create another class MainProgram with the main method.",
      "Create an instance of Employee with empNo = 101, invoke setBasicPay(), and call display() to verify the output."
    ],
    code: `package employee;

public class Employee {
    private int empNo;
    private double basicPay;

    public Employee(int empNo) {
        this.empNo = empNo;
    }

    public void setBasicPay(double pay) {
        this.basicPay = pay;
    }

    public void display() {
        System.out.println("Employee Number: " + empNo);
        System.out.println("Basic Pay: " + basicPay);
    }
}

// --------------------------------------------------

package employee;

import employee.Employee;

public class MainProgram {
    public static void main(String[] args) {
        Employee emp1 = new Employee(101);
        emp1.setBasicPay(50000);
        emp1.setBasicPay(50000.75);
        emp1.display();
    }
}`,
    output: `Employee Number: 101
Basic Pay: 50000.75`
  },
  {
    id: 2,
    number: "Program 2",
    title: "POLYMORPHISM, INHERITANCE AND INNER CLASSES",
    aim: "To demonstrate inheritance, dynamic polymorphism (method overriding), and the creation and usage of inner classes in Java.",
    algorithm: [
      "Define a base class Animal with a method sound() printing 'Animal is making sound'.",
      "Define a subclass Dog that extends Animal and overrides sound() to print 'Dog is Barking'.",
      "Create an inner class Puppy inside Dog with a method display() printing 'This is a Puppy, child of Dog.'.",
      "In the main class Inheritance, create an Animal reference assigned to a new Dog object to demonstrate runtime polymorphism.",
      "Create a Dog reference and call its overridden sound() method.",
      "Instantiate the inner class Puppy using the syntax: myDog.new Puppy(), and call its display() method."
    ],
    code: `package inheritance;

// Base class
class Animal {
    void sound() {
        System.out.println("Animal is making sound");
    }
}

// Subclass (Inheritance + Method Overriding)
class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog is Barking");
    }

    // Inner class inside Dog
    class Puppy {
        void display() {
            System.out.println("This is a Puppy, child of Dog.");
        }
    }
}

// Main class
public class Inheritance {
    public static void main(String[] args) {
        // Polymorphism: Parent reference -> Child object
        Animal myAnimal = new Dog();
        myAnimal.sound(); // Output: Dog is Barking

        // Inheritance (Overriding method)
        Dog myDog = new Dog();
        myDog.sound(); // Output: Dog is Barking

        // Inner class usage
        Dog.Puppy myPuppy = myDog.new Puppy();
        myPuppy.display(); // Output: This is a Puppy, child of Dog.
    }
}`,
    output: `Dog is Barking
Dog is Barking
This is a Puppy, child of Dog.`
  },
  {
    id: 3,
    number: "Program 3",
    title: "CUSTOM SHAPES",
    aim: "To build a Java Swing GUI application with menus to select shapes (Line, Rectangle, Oval) and colors (Red, Blue, Green), and render them on the window using Java AWT Graphics.",
    algorithm: [
      "Create a class CustomShapeFrame extending JFrame and implementing ActionListener.",
      "Initialize default variables: selectedShape = 'None' and selectedColor = Color.BLACK.",
      "Construct a JMenuBar with two JMenu options: 'Shapes' (Line, Rectangle, Oval) and 'Colors' (Red, Blue, Green).",
      "Attach ActionListener to each menu item and set the menu bar to the frame.",
      "Override paint(Graphics g) to set the active color and draw the selected shape using drawLine(), fillRect(), or fillOval().",
      "In actionPerformed(), update selectedShape or selectedColor based on the menu click and invoke repaint().",
      "In main(), create and display an instance of CustomShapeFrame."
    ],
    code: `package java_lab;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class CustomShapeFrame extends JFrame implements ActionListener {
    String selectedShape = "None";
    Color selectedColor = Color.BLACK;

    public CustomShapeFrame(int width, int height, int x, int y) {
        setTitle("Custom Shape Drawer");
        setSize(width, height);
        setLocation(x, y);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Create menu bar
        JMenuBar menuBar = new JMenuBar();

        // Shape menu
        JMenu shapeMenu = new JMenu("Shapes");
        String[] shapes = {"Line", "Rectangle", "Oval"};
        for (String shape : shapes) {
            JMenuItem item = new JMenuItem(shape);
            item.addActionListener(this);
            shapeMenu.add(item);
        }

        // Color menu
        JMenu colorMenu = new JMenu("Colors");
        JMenuItem red = new JMenuItem("Red");
        JMenuItem blue = new JMenuItem("Blue");
        JMenuItem green = new JMenuItem("Green");

        red.addActionListener(this);
        blue.addActionListener(this);
        green.addActionListener(this);

        colorMenu.add(red);
        colorMenu.add(blue);
        colorMenu.add(green);

        menuBar.add(shapeMenu);
        menuBar.add(colorMenu);
        setJMenuBar(menuBar);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.setColor(selectedColor);
        switch (selectedShape) {
            case "Line":
                g.drawLine(50, 100, 250, 100);
                break;
            case "Rectangle":
                g.fillRect(50, 120, 200, 80);
                break;
            case "Oval":
                g.fillOval(50, 120, 200, 80);
                break;
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String cmd = e.getActionCommand();
        if (cmd.equals("Line") || cmd.equals("Rectangle") || cmd.equals("Oval")) {
            selectedShape = cmd;
        } else if (cmd.equals("Red")) {
            selectedColor = Color.RED;
        } else if (cmd.equals("Blue")) {
            selectedColor = Color.BLUE;
        } else if (cmd.equals("Green")) {
            selectedColor = Color.GREEN;
        }
        repaint();
    }

    public static void main(String[] args) {
        CustomShapeFrame frame = new CustomShapeFrame(500, 400, 200, 200);
        frame.setVisible(true);
    }
}`,
    output: `GUI Window Title: "Custom Shape Drawer"
Menu Options:
  Shapes: Line | Rectangle | Oval
  Colors: Red | Blue | Green

Result when selecting "Rectangle" and "Red":
A red filled rectangle is rendered at (50, 120) with width 200 and height 80.`
  },
  {
    id: 4,
    number: "Program 4",
    title: "MOUSE EVENT",
    aim: "To demonstrate mouse event handling using the MouseAdapter class in Java Swing to capture clicks, presses, releases, and entry/exit actions.",
    algorithm: [
      "Create a class MouseAdapterDemo extending JFrame.",
      "Set layout to null and add a JLabel initialized with 'Move or click the mouse'.",
      "Attach a MouseAdapter listener to the frame using addMouseListener().",
      "Override mouseClicked(MouseEvent e) to display the coordinates (x, y) where the mouse was clicked.",
      "Override mousePressed(), mouseReleased(), mouseEntered(), and mouseExited() to update the label text accordingly.",
      "In main(), instantiate MouseAdapterDemo and set visible to true."
    ],
    code: `package java_lab;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class MouseAdapterDemo extends JFrame {
    JLabel label;

    public MouseAdapterDemo() {
        setTitle("MouseAdapter Demo");
        setSize(400, 400);
        setLayout(null);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        label = new JLabel("Move or click the mouse");
        label.setBounds(100, 100, 250, 30);
        add(label);

        addMouseListener(new MouseAdapter() {
            public void mouseClicked(MouseEvent e) {
                label.setText("Mouse Clicked at (" + e.getX() + ", " + e.getY() + ")");
            }
            public void mousePressed(MouseEvent e) {
                label.setText("Mouse Pressed");
            }
            public void mouseReleased(MouseEvent e) {
                label.setText("Mouse Released");
            }
            public void mouseEntered(MouseEvent e) {
                label.setText("Mouse Entered the Frame");
            }
            public void mouseExited(MouseEvent e) {
                label.setText("Mouse Exited the Frame");
            }
        });
    }

    public static void main(String[] args) {
        MouseAdapterDemo frame = new MouseAdapterDemo();
        frame.setVisible(true);
    }
}`,
    output: `GUI Window Title: "MouseAdapter Demo"
Event Updates:
- "Mouse Clicked at (142, 185)"
- "Mouse Pressed"
- "Mouse Released"
- "Mouse Entered the Frame"
- "Mouse Exited the Frame"`
  },
  {
    id: 5,
    number: "Program 5",
    title: "STUDENT INFO",
    aim: "To store student information (Name, Roll Number, Department, Marks) into a text file using FileWriter and BufferedWriter, and retrieve the details using FileReader and BufferedReader.",
    algorithm: [
      "Open or create 'students.txt' in append mode using FileWriter and wrap it with BufferedWriter.",
      "Read student details (Name, Roll Number, Department, Marks) from console input using Scanner.",
      "Format the details as comma-separated values (CSV) and write them to the file using bw.write() and bw.newLine().",
      "Close the BufferedWriter and FileWriter.",
      "Open 'students.txt' using FileReader wrapped in BufferedReader.",
      "Read the file line-by-line using br.readLine(), split fields by comma, and print the formatted details to console.",
      "Close the reader and handle any IOException using try-catch blocks."
    ],
    code: `package java_lab;

import java.io.*;
import java.util.Scanner;

public class StudentInfoFile {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String fileName = "students.txt";

        try {
            // Writing student info
            FileWriter fw = new FileWriter(fileName, true);
            BufferedWriter bw = new BufferedWriter(fw);

            System.out.print("Enter number of students: ");
            int n = sc.nextInt();
            sc.nextLine(); // consume newline

            for (int i = 0; i < n; i++) {
                System.out.println("Enter details for Student " + (i + 1));
                System.out.print("Name: ");
                String name = sc.nextLine();
                System.out.print("Roll Number: ");
                String roll = sc.nextLine();
                System.out.print("Department: ");
                String dept = sc.nextLine();
                System.out.print("Marks: ");
                int marks = sc.nextInt();
                sc.nextLine(); // consume newline

                bw.write(name + "," + roll + "," + dept + "," + marks);
                bw.newLine();
            }
            bw.close();
            fw.close();

            System.out.println("\\nStudent details written to file successfully.");

            // Reading student info
            System.out.println("\\nReading student details from file:");
            BufferedReader br = new BufferedReader(new FileReader(fileName));
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                System.out.println("Name: " + parts[0] + ", Roll No: " + parts[1] + ", Dept: " + parts[2] + ", Marks: " + parts[3]);
            }
            br.close();

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
    output: `Enter number of students: 1
Enter details for Student 1
Name: gopi
Roll Number: 25mca35
Department: mca
Marks: 89

Student details written to file successfully.

Reading student details from file:
Name: gopi, Roll No: 25mca35, Dept: mca, Marks: 89`
  },
  {
    id: 6,
    number: "Program 6",
    title: "TREE VIEWER",
    aim: "To create a hierarchical tree structure using Java Swing JTree and DefaultMutableTreeNode components enclosed in a JScrollPane.",
    algorithm: [
      "Create a JFrame with title 'Tree Viewer Example' and set size (400, 300).",
      "Create a root node using DefaultMutableTreeNode('Root').",
      "Create branch nodes: 'Branch 1' and 'Branch 2'.",
      "Add leaf nodes 'Leaf 1.1' and 'Leaf 1.2' to 'Branch 1'.",
      "Add leaf nodes 'Leaf 2.1' and 'Leaf 2.2' to 'Branch 2'.",
      "Add both branches to the root node.",
      "Instantiate a JTree passing the root node, and embed it inside a JScrollPane.",
      "Add the JScrollPane to the center of the JFrame and set visibility to true."
    ],
    code: `package java_lab;

import javax.swing.*;
import javax.swing.tree.DefaultMutableTreeNode;
import java.awt.*;

public class TreeViewer {
    public static void main(String[] args) {
        // Create a JFrame
        JFrame frame = new JFrame("Tree Viewer Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);

        // Create the root node
        DefaultMutableTreeNode root = new DefaultMutableTreeNode("Root");

        // Create child nodes
        DefaultMutableTreeNode branch1 = new DefaultMutableTreeNode("Branch 1");
        DefaultMutableTreeNode branch2 = new DefaultMutableTreeNode("Branch 2");

        // Add leaf nodes to branches
        branch1.add(new DefaultMutableTreeNode("Leaf 1.1"));
        branch1.add(new DefaultMutableTreeNode("Leaf 1.2"));

        branch2.add(new DefaultMutableTreeNode("Leaf 2.1"));
        branch2.add(new DefaultMutableTreeNode("Leaf 2.2"));

        // Add branches to root
        root.add(branch1);
        root.add(branch2);

        // Create the JTree using the root node
        JTree tree = new JTree(root);

        // Put the tree in a scroll pane
        JScrollPane scrollPane = new JScrollPane(tree);

        // Add the scroll pane to the frame
        frame.add(scrollPane, BorderLayout.CENTER);

        // Make the frame visible
        frame.setVisible(true);
    }
}`,
    output: `GUI Window Title: "Tree Viewer Example"
Tree View Hierarchy:
▾ Root
  ▸ Branch 1
      Leaf 1.1
      Leaf 1.2
  ▾ Branch 2
      Leaf 2.1
      Leaf 2.2`
  },
  {
    id: 7,
    number: "Program 7",
    title: "BADWORDS",
    aim: "To filter a text file by scanning for prohibited words defined in a HashSet, denying access if any prohibited words are present.",
    algorithm: [
      "Define a static HashSet BAD_WORDS containing prohibited terms: 'badword1', 'badword2', 'hate', 'violence'.",
      "Specify the file path of the document to inspect.",
      "Open the file with BufferedReader in a try-with-resources statement.",
      "Read each line, convert to lowercase, and check if it contains any word from BAD_WORDS.",
      "If a bad word is detected, set hasBadWords = true and break.",
      "If hasBadWords is true, display 'Access Denied: File contains prohibited words.'.",
      "Otherwise, read and print the file contents line-by-line to standard output."
    ],
    code: `package java_lab;

import java.io.*;
import java.util.*;

public class BadWordFilter {
    private static final Set<String> BAD_WORDS = new HashSet<>(Arrays.asList(
        "badword1", "badword2", "hate", "violence"
    ));

    public static void main(String[] args) {
        String filePath = "C:\\\\Users\\\\asus\\\\Documents\\\\sample.txt"; // Change path as needed

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            boolean hasBadWords = false;

            while ((line = reader.readLine()) != null) {
                for (String word : BAD_WORDS) {
                    if (line.toLowerCase().contains(word.toLowerCase())) {
                        hasBadWords = true;
                        break;
                    }
                }
                if (hasBadWords) break;
            }

            if (hasBadWords) {
                System.out.println("Access Denied: File contains prohibited words.");
            } else {
                try (BufferedReader displayReader = new BufferedReader(new FileReader(filePath))) {
                    System.out.println("File Contents:");
                    while ((line = displayReader.readLine()) != null) {
                        System.out.println(line);
                    }
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + filePath);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}`,
    output: `Access Denied: File contains prohibited words.`
  },
  {
    id: 8,
    number: "Program 8",
    title: "TEMPERATURE CONVERTER",
    aim: "To build a temperature converter GUI application using Java Swing with buttons to convert between Celsius and Fahrenheit, and a Clear button.",
    algorithm: [
      "Create class TemperatureConverter extending JFrame and implementing ActionListener.",
      "Set layout as GridLayout(4, 2, 10, 10) with labels and text fields for Celsius and Fahrenheit.",
      "Create three buttons: 'Convert to Fahrenheit', 'Convert to Celsius', and 'Clear'. Register ActionListeners.",
      "In actionPerformed(), check the event source:",
      "  - If convertToF: parse Celsius, apply formula (celsius * 9 / 5) + 32, and format result into fahrenheitField.",
      "  - If convertToC: parse Fahrenheit, apply formula (fahrenheit - 32) * 5 / 9, and format result into celsiusField.",
      "  - If clearButton: empty both text fields.",
      "Catch NumberFormatException and display JOptionPane error dialog if user inputs invalid text.",
      "In main(), launch the application using SwingUtilities.invokeLater()."
    ],
    code: `package java_lab;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class TemperatureConverter extends JFrame implements ActionListener {
    private JTextField celsiusField, fahrenheitField;
    private JButton convertToF, convertToC, clearButton;

    public TemperatureConverter() {
        setTitle("Temperature Converter");
        setSize(350, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(4, 2, 10, 10));

        JLabel celsiusLabel = new JLabel("Celsius:");
        JLabel fahrenheitLabel = new JLabel("Fahrenheit:");

        celsiusField = new JTextField();
        fahrenheitField = new JTextField();

        convertToF = new JButton("Convert to Fahrenheit");
        convertToC = new JButton("Convert to Celsius");
        clearButton = new JButton("Clear");

        convertToF.addActionListener(this);
        convertToC.addActionListener(this);
        clearButton.addActionListener(this);

        add(celsiusLabel);
        add(celsiusField);
        add(fahrenheitLabel);
        add(fahrenheitField);
        add(convertToF);
        add(convertToC);
        add(clearButton);

        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        try {
            if (e.getSource() == convertToF) {
                String celsiusText = celsiusField.getText();
                if (!celsiusText.isEmpty()) {
                    double celsius = Double.parseDouble(celsiusText);
                    double fahrenheit = (celsius * 9 / 5) + 32;
                    fahrenheitField.setText(String.format("%.2f", fahrenheit));
                }
            } else if (e.getSource() == convertToC) {
                String fahrenheitText = fahrenheitField.getText();
                if (!fahrenheitText.isEmpty()) {
                    double fahrenheit = Double.parseDouble(fahrenheitText);
                    double celsius = (fahrenheit - 32) * 5 / 9;
                    celsiusField.setText(String.format("%.2f", celsius));
                }
            } else if (e.getSource() == clearButton) {
                celsiusField.setText("");
                fahrenheitField.setText("");
            }
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Please enter a valid number.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TemperatureConverter());
    }
}`,
    output: `GUI Window Title: "Temperature Converter"
Input:
Celsius: 23
Action: Clicked [Convert to Fahrenheit]
Output:
Fahrenheit: 73.40`
  },
  {
    id: 9,
    number: "Program 9",
    title: "STUDENT FX / STUDENT DETAILS SWING",
    aim: "To create a student details entry GUI form using Java Swing with validation and a dialog prompt showing the submitted details.",
    algorithm: [
      "Create class StudentDetailsSwing extending JFrame with a 6x2 GridLayout.",
      "Add labels and text fields for Name, Register No, Department, and Email.",
      "Add 'Submit' and 'Clear' buttons with action listeners.",
      "On Submit: retrieve text from all fields. If any field is empty, show warning dialog 'Please fill all fields.'.",
      "If valid, concatenate the details and display them using JOptionPane.showMessageDialog(..., INFORMATION_MESSAGE).",
      "On Clear: set text of all fields to empty string.",
      "In main(), run the form via SwingUtilities.invokeLater()."
    ],
    code: `package java_lab;

import javax.swing.*;
import java.awt.*;

public class StudentDetailsSwing extends JFrame {
    public StudentDetailsSwing() {
        setTitle("Student Details");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(6, 2, 10, 10));

        JLabel nameLabel = new JLabel("Name:");
        JTextField nameField = new JTextField();
        JLabel regLabel = new JLabel("Register No:");
        JTextField regField = new JTextField();
        JLabel deptLabel = new JLabel("Department:");
        JTextField deptField = new JTextField();
        JLabel emailLabel = new JLabel("Email:");
        JTextField emailField = new JTextField();

        JButton submitBtn = new JButton("Submit");
        JButton clearBtn = new JButton("Clear");

        add(nameLabel); add(nameField);
        add(regLabel); add(regField);
        add(deptLabel); add(deptField);
        add(emailLabel); add(emailField);
        add(submitBtn); add(clearBtn);

        // Action for Submit
        submitBtn.addActionListener(e -> {
            String name = nameField.getText();
            String reg = regField.getText();
            String dept = deptField.getText();
            String email = emailField.getText();

            if (name.isEmpty() || reg.isEmpty() || dept.isEmpty() || email.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Please fill all fields.");
            } else {
                String info = "Name: " + name + "\\nRegister No: " + reg +
                             "\\nDepartment: " + dept + "\\nEmail: " + email;
                JOptionPane.showMessageDialog(this, info, "Student Details", JOptionPane.INFORMATION_MESSAGE);
            }
        });

        // Action for Clear
        clearBtn.addActionListener(e -> {
            nameField.setText("");
            regField.setText("");
            deptField.setText("");
            emailField.setText("");
        });

        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(StudentDetailsSwing::new);
    }
}`,
    output: `GUI Window Title: "Student Details"
Inputs:
Name: gopi
Register No: 25MCA35
Department: MCA
Email: gopi@gmail.com

Dialog Box "Student Details":
Name: gopi
Register No: 25MCA35
Department: MCA
Email: gopi@gmail.com`
  },
  {
    id: 10,
    number: "Program 10",
    title: "IMAGE VIEWER (JAVA BEAN)",
    aim: "To develop a reusable Java Bean component ImageViewerBean extending JPanel and implementing Serializable to load and center-render images in a window.",
    algorithm: [
      "Create class ImageViewerBean extending JPanel and implementing java.io.Serializable.",
      "Declare a private BufferedImage image variable.",
      "Implement setImagePath(String path) using ImageIO.read(new File(path)) and invoke repaint().",
      "Override paintComponent(Graphics g) to center the loaded image based on panel dimensions: x = (getWidth() - imgWidth)/2, y = (getHeight() - imgHeight)/2.",
      "Create a runner class ImageViewertest with main method.",
      "Create a JFrame, instantiate ImageViewerBean, set image path, add viewer to frame, and set visible."
    ],
    code: `package image;

import javax.swing.*;
import java.awt.*;
import java.io.File;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.beans.*;

public class ImageViewerBean extends JPanel implements java.io.Serializable {
    private BufferedImage image;

    public ImageViewerBean() {
        // Default constructor
    }

    public void setImagePath(String path) {
        try {
            image = ImageIO.read(new File(path));
            repaint();
        } catch (Exception e) {
            System.out.println("Image loading failed: " + e.getMessage());
        }
    }

    public String getImagePath() {
        return "";
    }

    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        if (image != null) {
            int x = (getWidth() - image.getWidth()) / 2;
            int y = (getHeight() - image.getHeight()) / 2;
            g.drawImage(image, x, y, this);
        }
    }
}

// --------------------------------------------------

package image;

import javax.swing.*;

public class ImageViewertest {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Java Bean Image Viewer");
        ImageViewerBean viewer = new ImageViewerBean();

        viewer.setImagePath("C:/Users/Admin/image1.png"); // Change to your image path
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(600, 400);
        frame.add(viewer);
        frame.setVisible(true);
    }
}`,
    output: `GUI Window Title: "Java Bean Image Viewer"
Loaded image (image1.png) is rendered perfectly centered within the 600x400 window frame.`
  },
  {
    id: 11,
    number: "Program 11",
    title: "2D SHAPES",
    aim: "To draw 2D basic geometric shapes (Line, Rectangle, and Oval) on a Swing window canvas using Java AWT Graphics.",
    algorithm: [
      "Create a class ShapeDrawing extending JPanel.",
      "Override paintComponent(Graphics g) and invoke super.paintComponent(g).",
      "Use g.drawLine(20, 30, 200, 30) to render a horizontal straight line.",
      "Use g.drawRect(20, 50, 100, 60) to render an outlined rectangle.",
      "Use g.drawOval(150, 50, 100, 60) to render an outlined oval.",
      "In main(), create a JFrame titled 'Drawing Basic Shapes', add the ShapeDrawing panel, set dimensions (300, 200), and display it."
    ],
    code: `package java_lab;

import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Graphics;

public class ShapeDrawing extends JPanel {
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Draw a line
        g.drawLine(20, 30, 200, 30);

        // Draw a rectangle
        g.drawRect(20, 50, 100, 60);

        // Draw an oval
        g.drawOval(150, 50, 100, 60);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Drawing Basic Shapes");
        ShapeDrawing panel = new ShapeDrawing();
        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(panel);
        frame.setVisible(true);
    }
}`,
    output: `GUI Window Title: "Drawing Basic Shapes"
Canvas displays:
- Line from (20, 30) to (200, 30)
- Rectangle at (20, 50) with width 100 and height 60
- Oval at (150, 50) with width 100 and height 60`
  },
  {
    id: 12,
    number: "Program 12",
    title: "TRANSFORMATIONS",
    aim: "To demonstrate 2D geometric transformations including Translation, Scaling, and Rotation on 2D shapes using Java Graphics2D and interactive buttons.",
    algorithm: [
      "Create class TransformShapes extending JPanel and implementing ActionListener.",
      "Add interactive buttons: 'Translate', 'Scale', and 'Rotate' to a button panel placed at BorderLayout.SOUTH.",
      "Override paintComponent(Graphics g) and cast Graphics to Graphics2D.",
      "Render original shapes in BLUE (Rectangle at 100, 100; Line from 100, 200 to 200, 250) with label 'Original'.",
      "Based on choice variable (1=Translate, 2=Scale, 3=Rotate), apply g2.translate(), g2.scale(), or g2.rotate(Math.toRadians(45)) and redraw shapes in RED.",
      "In actionPerformed(), update choice accordingly and call repaint().",
      "In main(), launch TransformShapes inside a JFrame."
    ],
    code: `package java_lab;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class TransformShapes extends JPanel implements ActionListener {
    private int choice = 0; // 1=translate, 2=scale, 3=rotate

    public TransformShapes() {
        JFrame frame = new JFrame("2D Transformations - Line & Rectangle");
        frame.setSize(500, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Buttons for transformations
        JButton translateBtn = new JButton("Translate");
        JButton scaleBtn = new JButton("Scale");
        JButton rotateBtn = new JButton("Rotate");

        translateBtn.addActionListener(this);
        scaleBtn.addActionListener(this);
        rotateBtn.addActionListener(this);

        JPanel buttonPanel = new JPanel();
        buttonPanel.add(translateBtn);
        buttonPanel.add(scaleBtn);
        buttonPanel.add(rotateBtn);

        frame.add(this, BorderLayout.CENTER);
        frame.add(buttonPanel, BorderLayout.SOUTH);
        frame.setVisible(true);
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;

        // Original shape
        g2.setColor(Color.BLUE);
        g2.drawRect(100, 100, 100, 50); // rectangle
        g2.drawLine(100, 200, 200, 250); // line
        g2.drawString("Original", 90, 90);

        // Apply transformations
        g2.setColor(Color.RED);
        switch (choice) {
            case 1: // Translation
                g2.translate(100, 50);
                g2.drawRect(100, 100, 100, 50);
                g2.drawLine(100, 200, 200, 250);
                g2.drawString("Translated", 90, 90);
                break;

            case 2: // Scaling
                g2.translate(100, 50);
                g2.scale(1.5, 1.5);
                g2.drawRect(100, 100, 100, 50);
                g2.drawLine(100, 200, 200, 250);
                g2.drawString("Scaled", 90, 90);
                break;

            case 3: // Rotation
                g2.translate(250, 150);
                g2.rotate(Math.toRadians(45));
                g2.drawRect(0, 0, 100, 50);
                g2.drawLine(0, 100, 100, 150);
                g2.drawString("Rotated", 10, -10);
                break;
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String cmd = e.getActionCommand();
        if (cmd.equals("Translate")) choice = 1;
        else if (cmd.equals("Scale")) choice = 2;
        else if (cmd.equals("Rotate")) choice = 3;
        repaint();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(TransformShapes::new);
    }
}`,
    output: `GUI Window Title: "2D Transformations - Line & Rectangle"
Buttons: [Translate] [Scale] [Rotate]
Active State (Scale clicked):
- Original blue shapes remain at default coordinates
- Scaled red rectangle and line appear 1.5x enlarged and shifted (100, 50) with label "Scaled"`
  }
];
