# Pathfinding Visualizer
Welcome to the **Pathfinding Visualizer**! This project is a web-based application that helps users visualize how different pathfinding algorithms work. Users can interact with a grid to place start and end points, obstacles, and watch how the algorithms navigate around obstacles to find the shortest path.

## 🚀 Features

- **Visualize Pathfinding Algorithms**:
  - Dijkstra's Algorithm
  - A* (A-Star) Search Algorithm
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
- **Interactive Grid**:
  - Click to place the start and end points
  - Add or remove walls and obstacles by clicking on the grid
  - Clear the grid and reset for a new visualization
- **Adjustable Speed**:
  - Choose the speed of the animation (slow, normal, fast)
- **Dynamic Animations**:
  - Watch the tiles change as the algorithm traverses the grid and discovers the path
- **Responsive Design**:
  - Optimized for different screen sizes

## 📖 How It Works

1. **Setup the Grid**:
   - Use the controls to place the start point, end point, and obstacles on the grid.
2. **Select an Algorithm**:
   - Choose one of the available algorithms from the dropdown.
3. **Visualize**:
   - Click "Visualize" to watch the algorithm work in real-time.
4. **Adjust Speed**:
   - Use the speed controls to change how quickly the tiles are traversed during the visualization.
5. **Clear & Reset**:
   - Easily reset the grid and start over with new placements.

## 🧩 Technologies Used

- **Frontend**:
  - HTML, CSS, JavaScript, React, TypeScript, TailwindCSS
- **Algorithms**:
  - Dijkstra’s Algorithm
  - A* Search Algorithm
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)

## 🔧 Installation

To run the Pathfinding Visualizer locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pathfinding-visualizer.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd pathfinding-visualizer
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```
5. **Open your browser**:
   - Visit `http://localhost:3000` to see the application in action.

## 🌐 Deployment

This project is also deployed on GitHub Pages. You can view the live demo [here](https://your-username.github.io/pathfinding-visualizer).

## 📷 Screenshots

### Home Screen

![Home Screen](https://your-username.github.io/pathfinding-visualizer/screenshots/home.png)

### Visualization Example

![Visualization](https://your-username.github.io/pathfinding-visualizer/screenshots/visualization.png)

## 🤖 Pathfinding Algorithms Explained

1. **Dijkstra's Algorithm**:
   - Guarantees the shortest path.
   - Explores nodes in the order of their distance from the start node.
2. **A* Search Algorithm**:
   - Combines features of Dijkstra's Algorithm and Greedy Best-First-Search.
   - Uses heuristics to find the shortest path more efficiently.
3. **Breadth-First Search (BFS)**:
   - Explores all nodes level by level.
   - Guarantees the shortest path if all edges have equal weight.
4. **Depth-First Search (DFS)**:
   - Explores as far as possible down a path before backtracking.
   - Does not guarantee the shortest path.

## 🛠 Troubleshooting

If you encounter issues while running the application, try the following:

1. **Blank Screen on GitHub Pages**:
   - Ensure the `homepage` field in `package.json` is set to `https://your-username.github.io/pathfinding-visualizer`.
   - Check the browser console for any error messages.
   - Clear your browser cache and refresh the page.
2. **Animation Not Working**:
   - Make sure you are using the latest version of the browser.
   - Check if the `className` updates are applied correctly.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## 📬 Contact

If you have any questions or feedback, feel free to reach out:

- **Name**: Usha D
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [your-username](https://github.com/your-username)

---

Feel free to modify this README file to include more details or screenshots as needed. Make sure to replace placeholders like `your-username` and `your-email@example.com` with your actual GitHub username and contact details.
