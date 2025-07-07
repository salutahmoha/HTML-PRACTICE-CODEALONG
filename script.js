const container = document.getElementById("container")

const h2 = document.createElement("h2")
h2.innerHTML = "This is my new title"

container.append(h2)

// when you want to push project to the github for firsttime
// 1.git init - initiaalize local repository
// 2. git add . - add all files to staging area
// 3. git commit -m "ensure the message here makes sense"  =when you want to commit changes to the staging area
// 4. git branch -m main (master is a commanding language) = rename the branch from master to main because master is a commanding language
// 5.git remote add origin (link) = add a remote repository
// 6. git push -u origin main = push the changes to the remote repository