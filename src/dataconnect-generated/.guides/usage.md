# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getCurrentUser, getUserByPhone, getStudentsByBranch, getStudentsBySection, getParentChildren, getParentByUser, getParentByPhone, getBranches, getBranchDetails, getUsersByRole } from '@dataconnect/generated';


// Operation GetCurrentUser:  For variables, look at type GetCurrentUserVars in ../index.d.ts
const { data } = await GetCurrentUser(dataConnect, getCurrentUserVars);

// Operation GetUserByPhone:  For variables, look at type GetUserByPhoneVars in ../index.d.ts
const { data } = await GetUserByPhone(dataConnect, getUserByPhoneVars);

// Operation GetStudentsByBranch:  For variables, look at type GetStudentsByBranchVars in ../index.d.ts
const { data } = await GetStudentsByBranch(dataConnect, getStudentsByBranchVars);

// Operation GetStudentsBySection:  For variables, look at type GetStudentsBySectionVars in ../index.d.ts
const { data } = await GetStudentsBySection(dataConnect, getStudentsBySectionVars);

// Operation GetParentChildren:  For variables, look at type GetParentChildrenVars in ../index.d.ts
const { data } = await GetParentChildren(dataConnect, getParentChildrenVars);

// Operation GetParentByUser:  For variables, look at type GetParentByUserVars in ../index.d.ts
const { data } = await GetParentByUser(dataConnect, getParentByUserVars);

// Operation GetParentByPhone:  For variables, look at type GetParentByPhoneVars in ../index.d.ts
const { data } = await GetParentByPhone(dataConnect, getParentByPhoneVars);

// Operation GetBranches:  For variables, look at type GetBranchesVars in ../index.d.ts
const { data } = await GetBranches(dataConnect, getBranchesVars);

// Operation GetBranchDetails:  For variables, look at type GetBranchDetailsVars in ../index.d.ts
const { data } = await GetBranchDetails(dataConnect, getBranchDetailsVars);

// Operation GetUsersByRole:  For variables, look at type GetUsersByRoleVars in ../index.d.ts
const { data } = await GetUsersByRole(dataConnect, getUsersByRoleVars);


```