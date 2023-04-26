
const express = require ('express');//Import Express.js framework
const router = express.Router(); // creates an instance of the Express Router
const {UserProfile} = require('../models/userprofile') // Import UserProfile model



router.get('/userprofile', async (req, res) => {
    const userList = await UserProfile.find();

    if(!userList){
        res.status(500).json({success:false})
    }

    res.send(userList);
})

// GET a single user by id
router.get('/userprofile/:id', async (req, res) => {
    const getUser = await UserProfile.findById(req.params.id);
  
    if(!getUser){
      res.status(500).json({
        success: false
      })
    }
  
    res.status(200).send(getUser);
  });

  // CREATE a new user
  router.post('/userprofile/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await UserProfile.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user document
    const newUser = new UserProfile({ firstName, lastName, email, password });

    // Save the new user to the database
    await newUser.save();

    // Registration successful
    return res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
  });

  // UPDATE a user by id
  router.put('/userprofile/:id', async (req, res) => {
    let user = await UserProfile.findByIdAndUpdate(
      req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }, {
        new: true
      })
    if(!user)
      return res.status(404). send('Err: cannot be created')
  
    res.send(user)
  })
  

  // DELETE a user by id
  router.delete('/userprofile/:id', async (req, res) => {
    UserProfile.findByIdAndRemove(req.params.id).then(user => {
      if(user){
        return res.status(200).json({
          success: true,
          message: 'User is deleted'
        })
      }else{
        return res.status(404).json({
          success: false,
          message: 'User not found'
        })
      }
    }).catch(err => {
      return res.status(400).json({
        success: false,
        error: err
      })
    })
  })
  

    // Login a user
    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
    
        // Find the user in the database
        const user = await UserProfile.findOne({ email });
    
        // Check if the user exists and the password is correct
        if (!user || user.password !== password) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        // Update the lastLogin field of the user document
        UserProfile.lastLogin = Date.now();
        await user.save();
    
        // Login successful
        return res.status(200).json({ message: 'Login successful' });
      });

    module.exports = router;