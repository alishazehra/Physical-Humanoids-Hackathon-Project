interface SignupData {
  fullName: string;
  email: string;
  password: string;
  softwareBackground: string;
  hardwareBackground: string;
}

const users: SignupData[] = [];

const apiClient = {
  signup: async (data: SignupData) => {
    // Check if user already exists
    const exists = users.find(u => u.email === data.email);
    if (exists) {
      throw new Error('User already exists');
    }
    users.push(data);
    return { success: true, message: 'User registered successfully' };
  },

  login: async (email: string, password: string) => {
    const user = users.find(u => u.email === email);
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }
    return { email: user.email, fullName: user.fullName };
  }
};

export default apiClient;
