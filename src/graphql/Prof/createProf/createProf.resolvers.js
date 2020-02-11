import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createProf: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { name, email, workPhone, position, title, company, order } = args;

      return await prisma.createProf({
        name,
        email,
        workPhone,
        position,
        title,
        company,
        order,
        photo: {
          connect: { id: 'ck611mszfgevm0901zo02ntsg' }
        }
      });
    }
  }
};