<!-- 
  TapingTrading Firebase 集成
  1. 把以下代码添加到 index.html 的 <head> 中
  2. 把你的 Firebase 配置填入下面
-->

<!-- Firebase SDK -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js";
  import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-firestore.js";

  // ===== 你的 Firebase 配置 =====
  const firebaseConfig = {
    apiKey: "AIzaSyC5SZrLBFQoTPGiDfqe0XYwgT2I0caeBvQ",
    authDomain: "tapingtrading.firebaseapp.com",
    projectId: "tapingtrading",
    storageBucket: "tapingtrading.firebasestorage.app",
    messagingSenderId: "248437210641",
    appId: "1:248437210641:web:d542acc355793e7ecd3bb0",
    measurementId: "G-XPBQ1JF4RD"
  };

  // 初始化 Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // ===== 用户登录函数 =====
  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // ===== 用户注册函数 =====
  async function register(email, password, name) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // 保存用户信息到 Firestore
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        email: email,
        name: name,
        role: "customer",  // customer 或 admin
        createdAt: new Date()
      });
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // ===== 退出登录 =====
  async function logout() {
    await signOut(auth);
  }

  // ===== 添加订单 =====
  async function addOrder(orderData) {
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        ...orderData,
        createdAt: new Date(),
        status: "pending"
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // ===== 获取订单 =====
  async function getOrders(userId) {
    try {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      return { success: true, orders: snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})) };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // ===== 获取所有订单（管理员） =====
  async function getAllOrders() {
    try {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      return { success: true, orders: snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})) };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // ===== 检查用户是否管理员 =====
  async function checkAdmin(user) {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const snapshot = await getDocs(q);
      if (snapshot.empty) return false;
      const userData = snapshot.docs[0].data();
      return userData.role === "admin";
    } catch (error) {
      return false;
    }
  }

  // ===== 监听登录状态 =====
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("用户已登录:", user.email);
      // 显示用户信息
      document.getElementById("user-email").textContent = user.email;
      checkAdmin(user).then(isAdmin => {
        if (isAdmin) {
          document.getElementById("admin-panel").style.display = "block";
        }
      });
    } else {
      console.log("用户未登录");
    }
  });

  // 导出函数供 HTML 调用
  window.login = login;
  window.register = register;
  window.logout = logout;
  window.addOrder = addOrder;
  window.getOrders = getOrders;
  window.getAllOrders = getAllOrders;
</script>